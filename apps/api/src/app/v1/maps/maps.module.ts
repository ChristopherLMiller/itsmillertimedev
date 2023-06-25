import { Module } from '@nestjs/common';
import { PrismaService } from '../../../common/prisma/prisma.service';
import { SettingsModule } from '../../settings/settings.module';
import { MapsController } from './maps.controller';
import { MapsService } from './maps.service';

@Module({
  controllers: [MapsController],
  imports: [SettingsModule],
  providers: [MapsService, PrismaService],
})
export class MapsModule {}
