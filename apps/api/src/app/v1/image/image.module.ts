import { HttpModule } from '@nestjs/axios';
import { CacheModule, Module } from '@nestjs/common';
import { PrismaModule } from '../../../common/prisma/prisma.module';
import { SettingsModule } from '../../settings/settings.module';
import { ImageController } from './image.controller';
import { ImageService } from './image.service';

@Module({
  controllers: [ImageController],
  imports: [HttpModule, CacheModule.register(), PrismaModule, SettingsModule],
  providers: [ImageService],
  exports: [ImageService],
})
export class ImageModule {}
