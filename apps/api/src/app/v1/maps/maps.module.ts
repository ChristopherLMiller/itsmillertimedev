import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { MapsController } from './maps.controller';
import { MapsService } from './maps.service';

@Module({
  controllers: [MapsController],
  imports: [],
  providers: [MapsService, PrismaService],
})
export class MapsModule {}
