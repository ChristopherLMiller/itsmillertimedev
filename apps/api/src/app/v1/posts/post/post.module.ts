import { CacheModule, Module } from '@nestjs/common';
import { PrismaModule } from '../../../../common/prisma/prisma.module';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  controllers: [PostController],
  providers: [PostService],
  imports: [CacheModule.register(), PrismaModule],
  exports: [PostService],
})
export class PostModule {}
