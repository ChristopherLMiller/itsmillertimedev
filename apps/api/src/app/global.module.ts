import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import MemoryStore from 'cache-manager-memory-store';
import { redisStore } from 'cache-manager-redis-yet';
import { config } from '../../config';
import { supabaseAuthGuard } from '../common/guards/supabaseAuth.guard';
import { UserInterceptor } from '../common/interceptors/user.interceptor';
import { LoggerMiddleware } from '../common/middleware/logging.middleware';
import { AuthModule } from './common/auth/auth.module';
import { PrismaModule } from './common/prisma/prisma.module';
import { SettingsModule } from './common/settings/settings.module';
import { V1Module } from './v1/v1.module';

@Module({
  controllers: [],
  imports: [
    DevtoolsModule.register({
      http: config.general.environment !== 'production',
    }),
    SettingsModule,
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: async () => {
        // If we don't want caching eject now
        if (!config.caching.enabled) {
          console.log('Caching Service - Disabled');
          return {};
        }

        // If we are in dev mode, set memory cache
        if (config.general.isDev) {
          console.log('Caching Service - Development mode; memory cache');
          return { store: MemoryStore };
        }

        // If we reached this point we aren't in dev mode, and caching is enabled
        // try and create the redis store, if it fails then fallback to memory cache
        try {
          console.log(
            `Caching Service - ${config.caching.redis.host}:${config.caching.redis.port} TTL: ${config.caching.redis.ttl}`,
          );
          const store = await redisStore({
            socket: {
              host: config.caching.redis.host,
              passphrase: config.caching.redis.password,
              port: +config.caching.redis.port,
            },
            ttl: config.caching.redis.ttl,
          });
          return { store };
        } catch (error) {
          console.log(
            'Unable to connect to redis store, falling back to memory cache',
          );
          console.log(error);
          return { store: MemoryStore };
        }
      },
    }),
    V1Module,
    AuthModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: UserInterceptor,
    },
    {
      provide: APP_GUARD,
      useClass: supabaseAuthGuard,
    },
    Logger,
  ],
})
export class GlobalModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
