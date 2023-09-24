import { CacheModule, Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  controllers: [PostController],
  providers: [PostService],
  imports: [CacheModule.register()],
  exports: [PostService],
})
export class PostModule {}
