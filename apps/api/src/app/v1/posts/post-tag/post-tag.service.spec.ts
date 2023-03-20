import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../../common/prisma/prisma.service';
import { PostTagService } from './post-tag.service';

describe('PostTagService', () => {
  let service: PostTagService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostTagService, PrismaService],
    }).compile();

    service = module.get<PostTagService>(PostTagService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
