import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../common/prisma/prisma.service';
import { ClockifyController } from './clockify.controller';
import { ClockifyService } from './clockify.service';

describe('ClockifyController', () => {
  let controller: ClockifyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClockifyController],
      providers: [ClockifyService, PrismaService],
    }).compile();

    controller = module.get<ClockifyController>(ClockifyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
