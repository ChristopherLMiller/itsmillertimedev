import { Module } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { PostCategoryController } from './post-category.controller';
import { PostCategoryService } from './post-category.service';

@Module({
  controllers: [PostCategoryController],
  providers: [PostCategoryService, PrismaService],
})
export class PostCategoryModule {}
