import { Module } from "@nestjs/common";
import { MinecraftService } from "./minecraft.service";
import { MinecraftServerController } from "./server/minecraftServer.controller";
import { MinecraftStatsController } from "./stats/minecraftStats.controller";

@Module({
  controllers: [MinecraftServerController, MinecraftStatsController],
  imports: [],
  providers: [MinecraftService],
})
export class MinecraftModule {}
