import { Module } from '@nestjs/common';
import { PrismaModule } from '../../../../common/prisma/prisma.module';
import { PostCategoryController } from './post-category.controller';
import { PostCategoryService } from './post-category.service';

@Module({
  controllers: [PostCategoryController],
  providers: [PostCategoryService],
  imports: [PrismaModule],
})
export class PostCategoryModule {}
