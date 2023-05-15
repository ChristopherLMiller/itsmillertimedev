import { CacheInterceptor, CacheModule, Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import MemoryStore from 'cache-manager-memory-store';
import { redisStore } from 'cache-manager-redis-yet';
import { config } from '../../config';
import { AdminJSModule } from '../common/admin-js/admin-js.module';
import { V1Module } from './v1/v1.module';

@Module({
  controllers: [],
  imports: [
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
    AdminJSModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
    Logger,
  ],
})
export class GlobalModule {}
