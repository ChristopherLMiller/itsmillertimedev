import { Module } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { MinecraftService } from './minecraft.service';
import { MinecraftServerController } from './server/minecraftServer.controller';
import { MinecraftStatsController } from './stats/minecraftStats.controller';

@Module({
  controllers: [MinecraftServerController, MinecraftStatsController],
  imports: [],
  providers: [MinecraftService, PrismaService],
})
export class MinecraftModule {}
