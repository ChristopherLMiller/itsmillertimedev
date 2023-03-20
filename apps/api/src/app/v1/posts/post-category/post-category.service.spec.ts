import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../../common/prisma/prisma.service';
import { PostCategoryService } from './post-category.service';

describe('PostCategoryService', () => {
  let service: PostCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostCategoryService, PrismaService],
    }).compile();

    service = module.get<PostCategoryService>(PostCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
