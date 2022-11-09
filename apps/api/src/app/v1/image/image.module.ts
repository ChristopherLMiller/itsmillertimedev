import { HttpModule } from '@nestjs/axios';
import { CacheModule, Module } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { ImageController } from './image.controller';
import { ImageService } from './image.service';

@Module({
  controllers: [ImageController],
  imports: [HttpModule, CacheModule.register()],
  providers: [ImageService, PrismaService],
  exports: [ImageService],
})
export class ImageModule {}
