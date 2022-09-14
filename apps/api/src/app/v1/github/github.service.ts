import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class GithubService {
  constructor(private httpService: HttpService) {}

  findUser(login: string): any {
    return this.httpService
      .get(`https://api.github.com/users/${login}`)
      .pipe(map((response) => response.data));
  }
}
