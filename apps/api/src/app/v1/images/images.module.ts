import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { ImagesController } from './images.controller';
import { ImagesService } from './images.service';

@Module({
  controllers: [ImagesController],
  imports: [HttpModule],
  providers: [ImagesService, PrismaService],
})
export class ImagesModule {}
