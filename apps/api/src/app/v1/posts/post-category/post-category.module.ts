import { Module } from '@nestjs/common';
import { PostCategoryController } from './post-category.controller';
import { PostCategoryService } from './post-category.service';

@Module({
  controllers: [PostCategoryController],
  providers: [PostCategoryService],
  imports: [],
})
export class PostCategoryModule {}
