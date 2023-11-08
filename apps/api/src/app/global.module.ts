import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import MemoryStore from 'cache-manager-memory-store';
import { redisStore } from 'cache-manager-redis-yet';
import { supabaseAuthGuard } from '../common/guards/supabaseAuth.guard';
import { LoggingInterceptor } from '../common/interceptors/logging.interceptor';
import { UserInterceptor } from '../common/interceptors/user.interceptor';
import { AuthModule } from './common/auth/auth.module';
import { DiscordBotModule } from './common/discord-bot/discord-bot.module';
import { PrismaModule } from './common/prisma/prisma.module';
import { SettingsModule } from './common/settings/settings.module';
import { V1Module } from './v1/v1.module';

@Module({
  controllers: [],
  imports: [
    DevtoolsModule.register({
      http: process.env.ENVIRONMENT !== 'production',
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
        const logger = new Logger(GlobalModule.name);
        // If we don't want caching eject now
        if (!process.env.CACHING_ENABLED) {
          logger.log('Caching Service - Disabled');
          return {};
        }

        // If we are in dev mode, set memory cache
        if (process.env.ENVIRONMENT === 'development') {
          logger.log('Caching Service - Development mode; memory cache');
          return { store: MemoryStore };
        }

        // If we reached this point we aren't in dev mode, and caching is enabled
        // try and create the redis store, if it fails then fallback to memory cache
        try {
          logger.log(
            `Caching Service - ${process.env.REDIS_HOST}:${process.env.REDIS_PORT} TTL: ${process.env.CACHE_TTL}`,
          );
          const store = await redisStore({
            socket: {
              host: process.env.REDIS_HOST,
              passphrase: process.env.REDIS_PASSWORD,
              port: +process.env.REDIS_PORT,
            },
            ttl: +process.env.CACHE_TTL,
          });
          return { store };
        } catch (error) {
          logger.log(
            'Unable to connect to redis store, falling back to memory cache',
          );
          logger.log(error);
          return { store: MemoryStore };
        }
      },
    }),
    V1Module,
    AuthModule,
    DiscordBotModule,
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
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    {
      provide: APP_GUARD,
      useClass: supabaseAuthGuard,
    },
    Logger,
  ],
})
export class GlobalModule {}
