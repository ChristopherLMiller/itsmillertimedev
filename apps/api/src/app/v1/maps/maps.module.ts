import { Module } from '@nestjs/common';
import { MapsController } from './maps.controller';
import { MapsService } from './maps.service';

@Module({
  controllers: [MapsController],
  imports: [],
  providers: [MapsService],
})
export class MapsModule {}
