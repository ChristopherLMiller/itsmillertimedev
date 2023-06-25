import { Module } from '@nestjs/common';
import { PrismaModule } from '../../../common/prisma/prisma.module';
import { SettingsModule } from '../../settings/settings.module';
import { MinecraftService } from './minecraft.service';
import { MinecraftServerController } from './server/minecraftServer.controller';
import { MinecraftStatsController } from './stats/minecraftStats.controller';

@Module({
  controllers: [MinecraftServerController, MinecraftStatsController],
  imports: [PrismaModule, SettingsModule],
  providers: [MinecraftService],
})
export class MinecraftModule {}
