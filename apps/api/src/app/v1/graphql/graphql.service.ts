import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { catchError, firstValueFrom } from 'rxjs';
import { handleAxiosError } from '../../handleAxiosError';

@Injectable()
export class GraphqlService {
  constructor(private http: HttpService) {}

  // Query the GraphQL API
  query(query: string, variables?: any): Promise<any> {
    const response = this.http
      .post(
        'graphql',
        { query, variables },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      )
      .pipe(catchError(handleAxiosError));
    return firstValueFrom(response);
  }
}
