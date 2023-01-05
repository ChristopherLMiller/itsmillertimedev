import { CacheModule, Module } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  controllers: [PostController],
  providers: [PostService, PrismaService],
  imports: [CacheModule.register()],
})
export class PostModule {}
