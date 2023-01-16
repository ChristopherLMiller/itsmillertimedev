import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { redisStore } from 'cache-manager-redis-yet';
import { PrismaService } from '../../prisma/prisma.service';
import { ClockifyModule } from './clockify/clockify.module';
import { DiscordModule } from './discord/discord.module';
import { GithubModule } from './github/github.module';
import { HealthController } from './health/health.controller';
import { ImageModule } from './image/image.module';
import { LastFMModule } from './lastfm/lastfm.module';
import { MapModule } from './maps/maps.module';
import { MinecraftModule } from './minecraft/minecraft.module';
import { PostCategoryModule } from './post-category/post-category.module';
import { PostTagModule } from './post-tag/post-tag.module';
import { PostModule } from './post/post.module';
import { V1Controller } from './v1.controller';
import { WeatherModule } from './weather/weather.module';
import { WebhooksModule } from './webhooks/webhooks.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    CacheModule.register({
      isGlobal: true,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        store: await redisStore({
          socket: {
            host: config.get('REDIS_HOST'),
            port: +config.get('REDIS_PORT'),
            //tls: true,
          },
          //password: config.get('REDIS_PASSWORD'),
          //username: config.get('REDIS_USERNAME'),
          ttl: config.get('CACHE_TTL'),
        }),
      }),
    }),
    GithubModule,
    ClockifyModule,
    ImageModule,
    MinecraftModule,
    MapModule,
    WebhooksModule,
    WeatherModule,
    DiscordModule,
    LastFMModule,
    PostCategoryModule,
    PostTagModule,
    PostModule,
  ],
  controllers: [V1Controller, HealthController],
  providers: [
    PrismaService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class V1Module {}
