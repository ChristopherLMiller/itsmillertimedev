import { Module } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { PostTagController } from './post-tag.controller';
import { PostTagService } from './post-tag.service';

@Module({
  controllers: [PostTagController],
  providers: [PostTagService, PrismaService],
})
export class PostTagModule {}
