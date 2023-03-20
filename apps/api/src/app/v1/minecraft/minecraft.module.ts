import { Module } from '@nestjs/common';
import { PrismaModule } from '../../../common/prisma/prisma.module';
import { MinecraftService } from './minecraft.service';
import { MinecraftServerController } from './server/minecraftServer.controller';
import { MinecraftStatsController } from './stats/minecraftStats.controller';

@Module({
  controllers: [MinecraftServerController, MinecraftStatsController],
  imports: [PrismaModule],
  providers: [MinecraftService],
})
export class MinecraftModule {}
