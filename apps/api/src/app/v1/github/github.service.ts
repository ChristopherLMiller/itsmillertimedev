import { GithubUser } from "@itsmillertimedev/data";
import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { dataFetcher } from "../../../global/handlers/dataFetcher";

@Injectable()
export class GithubService {
  constructor(private httpService: HttpService) {}

  async findUser(login: string): Promise<GithubUser> {
    return await dataFetcher(this.httpService.get(`users/${login}`));
  }
}
