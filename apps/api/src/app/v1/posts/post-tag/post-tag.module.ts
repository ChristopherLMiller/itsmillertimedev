import { CacheModule, Module } from '@nestjs/common';
import { PrismaModule } from '../../../../common/prisma/prisma.module';
import { SettingsModule } from '../../../settings/settings.module';
import { PostTagController } from './post-tag.controller';
import { PostTagService } from './post-tag.service';

@Module({
  controllers: [PostTagController],
  providers: [PostTagService],
  imports: [CacheModule.register(), PrismaModule, SettingsModule],
})
export class PostTagModule {}
