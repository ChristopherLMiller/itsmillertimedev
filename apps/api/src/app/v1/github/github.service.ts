import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { dataFetcher } from '../../../common/handlers/dataFetcher';

@Injectable()
export class GithubService {
  constructor(private httpService: HttpService) {}

  async findUser(login: string): Promise<any> {
    const data = await dataFetcher(
      this.httpService.get(`https://api.github.com/users/${login}`)
    );

    return data;
  }
}
