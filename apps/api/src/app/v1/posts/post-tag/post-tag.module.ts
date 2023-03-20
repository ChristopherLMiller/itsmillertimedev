import { CacheModule, Module } from '@nestjs/common';
import { PrismaModule } from '../../../../common/prisma/prisma.module';
import { PostTagController } from './post-tag.controller';
import { PostTagService } from './post-tag.service';

@Module({
  controllers: [PostTagController],
  providers: [PostTagService],
  imports: [CacheModule.register(), PrismaModule],
})
export class PostTagModule {}
