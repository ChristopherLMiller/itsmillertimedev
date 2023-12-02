import { Module } from '@nestjs/common';
import { ClockifyModule } from './clockify/clockify.module';
import { DiscordModule } from './discord/discord.module';
import { GithubModule } from './github/github.module';
import { ImageModule } from './image/image.module';
import { LastFMModule } from './lastfm/lastfm.module';
import { MapsModule } from './maps/maps.module';
import { MinecraftModule } from './minecraft/minecraft.module';
import { PagesModule } from './pages/pages.module';
import { PostCategoryModule } from './posts/post-category/post-category.module';
import { PostTagModule } from './posts/post-tag/post-tag.module';
import { PostModule } from './posts/post/post.module';
import { WeatherModule } from './weather/weather.module';

@Module({
  imports: [
    GithubModule,
    ClockifyModule,
    ImageModule,
    DiscordModule,
    MinecraftModule,
    MapsModule,
    WeatherModule,
    LastFMModule,
    PostCategoryModule,
    PostTagModule,
    PostModule,
    PagesModule,
  ],
})
export class V1Module {}
