import { Module } from '@nestjs/common';
import { PostTagsController } from './post-tags.controller';
import { PostTagsService } from './post-tags.service';

@Module({
  controllers: [PostTagsController],
  providers: [PostTagsService],
  imports: [],
})
export class PostTagsModule {}
