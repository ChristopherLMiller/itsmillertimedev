import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { BoardGameController } from "./board-games.controller";
import { BoardGameService } from "./board-games.service";

@Module({
  imports: [
    HttpModule.register({
      baseURL: "https://boardgamegeek.com/xmlapi2/",
    }),
  ],
  exports: [],
  controllers: [BoardGameController],
  providers: [BoardGameService],
})
export class BoardGamesModule {}
