import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import * as redisStore from 'cache-manager-redis-store';
import type { ClientOpts } from 'redis';
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
    CacheModule.registerAsync<ClientOpts>({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        store: redisStore,
        host: configService.get('REDIS_HOST'),
        port: configService.get('REDIS_PORT'),
        ttl: parseInt(configService.get('CACHE_TTL')) || 5,
        max: parseInt(configService.get('MAX_ITEM_IN_CACHE')) || 100,
        no_ready_check: false,
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
