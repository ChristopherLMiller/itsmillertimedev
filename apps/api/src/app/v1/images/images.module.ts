import { HttpModule } from '@nestjs/axios';
import { CacheModule, Module } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { ImagesController } from './images.controller';
import { ImagesService } from './images.service';

@Module({
  controllers: [ImagesController],
  imports: [HttpModule, CacheModule.register()],
  providers: [ImagesService, PrismaService],
})
export class ImagesModule {}
