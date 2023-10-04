import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../prisma/prisma.service';
import { PostTagController } from './post-tag.controller';
import { PostTagService } from './post-tag.service';

describe('PostTagController', () => {
  let controller: PostTagController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostTagController],
      providers: [PostTagService, PrismaService],
    }).compile();

    controller = module.get<PostTagController>(PostTagController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
