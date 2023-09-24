import { CacheInterceptor, CacheModule, Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import MemoryStore from 'cache-manager-memory-store';
import { redisStore } from 'cache-manager-redis-yet';
import { config } from '../../config';
import { supabaseAuthGuard } from '../common/guards/supabaseAuth.guard';
import { UserInterceptor } from '../common/interceptors/user.interceptor';
import { PrismaModule } from '../common/prisma/prisma.module';
import { AdminJSModule } from './admin/admin-js.module';
import { AuthModule } from './auth/auth.module';
import { SettingsModule } from './settings/settings.module';
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
        // Caching depends on if we are in production or dev
        if (!config.general.isDev) {
          return {
            store: await redisStore({
              socket: {
                host: config.caching.redis.host,
                port: +config.caching.redis.port,
              },
              ttl: +config.caching.redis.ttl,
            }),
          };
        } else {
          return {
            store: MemoryStore,
          };
        }
      },
    }),
    V1Module,
    AuthModule,
    AdminJSModule,
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
export class GlobalModule {}
