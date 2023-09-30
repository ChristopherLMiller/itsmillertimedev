import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { PostService } from '../posts/post/post.service';
import { RSSController } from './rss.controller';

@Module({
  controllers: [RSSController],
  imports: [CacheModule.register()],
  providers: [PostService],
  exports: [],
})
export class RssModule {}
