import { Controller, Get, Injectable, Param, Query } from "@nestjs/common";
import { BoardGameService } from "./board-games.service";

@Injectable()
@Controller({ version: "1", path: "board-games" })
export class BoardGameController {
  constructor(private boardGameService: BoardGameService) {}

  @Get("collection/:username")
  async getBoardGameCollection(@Param("username") username: string) {
    return {
      data: await this.boardGameService.getBoardGameCollection(username),
    };
  }

  @Get("game/:id")
  async getBoardGame(@Param("id") id: string, @Query("type") type?: string) {
    return {
      data: await this.boardGameService.getBoardGame(id, type),
    };
  }

  @Get("plays/:username")
  async getPlays(
    @Param("username") username: string,
    @Query("page") page?: number,
  ) {
    return {
      data: await this.boardGameService.getPlays(username, page),
    };
  }
}
