import { Module } from '@nestjs/common';
import { ClockifyModule } from './clockify/clockify.module';
import { DiscordModule } from './discord/discord.module';
import { GithubModule } from './github/github.module';
import { HealthController } from './health/health.controller';
import { ImageModule } from './image/image.module';
import { LastFMModule } from './lastfm/lastfm.module';
import { MapsModule } from './maps/maps.module';
import { MinecraftModule } from './minecraft/minecraft.module';
import { PageModule } from './page/page.module';
import { PostCategoryModule } from './posts/post-category/post-category.module';
import { PostTagModule } from './posts/post-tag/post-tag.module';
import { PostModule } from './posts/post/post.module';
import { WeatherModule } from './weather/weather.module';

@Module({
  imports: [
    GithubModule,
    ClockifyModule,
    ImageModule,
    MinecraftModule,
    MapsModule,
    WeatherModule,
    DiscordModule,
    LastFMModule,
    PostCategoryModule,
    PostTagModule,
    PostModule,
    PageModule,
  ],
  controllers: [HealthController],
})
export class V1Module {}
