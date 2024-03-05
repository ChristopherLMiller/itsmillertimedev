import { HttpService } from "@nestjs/axios";
import { Injectable, Logger } from "@nestjs/common";
import { firstValueFrom } from "rxjs";
import { parseStringPromise } from "xml2js";

@Injectable()
export class BoardGameService {
  constructor(private http: HttpService) {}

  private readonly _logger = new Logger(BoardGameService.name);

  async getBoardGameCollection(username: string) {
    return this.fetchData(`collection?username=${username}`);
  }

  async getPlays(username: string, page: number = 0) {
    return this.fetchData(`plays?username=${username}&page=${page}`);
  }

  async getBoardGame(
    id: string,
    type: string = "boardgame,boardgameexpansion,boardgameaccessory",
  ) {
    return this.fetchData(`thing?id=${id}&type=${type}`);
  }

  // TODO create the return type, need to fetch the data from the serer and then create it
  async fetchData(path: string): Promise<any> {
    const response = this.http.get(path);
    const data = await firstValueFrom(response);

    const result = await parseStringPromise(data.data).then((result) => result);

    if (data.status === 202) {
      return result.message;
    } else {
      return result;
    }
  }
}
