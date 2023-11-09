import { Module } from '@nestjs/common';
import { PostTagController } from './post-tag.controller';
import { PostTagService } from './post-tag.service';

@Module({
  controllers: [PostTagController],
  providers: [PostTagService],
  imports: [],
})
export class PostTagModule {}
