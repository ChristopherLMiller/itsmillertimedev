import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../prisma/prisma.service';
import { PostCategoryController } from './post-category.controller';
import { PostCategoryService } from './post-category.service';

describe('PostCategoryController', () => {
  let controller: PostCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostCategoryController],
      providers: [PostCategoryService, PrismaService],
    }).compile();

    controller = module.get<PostCategoryController>(PostCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
