/* eslint-disable @typescript-eslint/ban-ts-comment */
import { AxiosResponse } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { axiosErrorHandler } from './axiosErrorHandler';

export async function dataFetcher(request: unknown): Promise<AxiosResponse> {
  // @ts-ignore
  // TODO: Fix types
  const response = await request.pipe(catchError(axiosErrorHandler));
  // @ts-ignore
  // TODO: Fix Types
  const { data } = await firstValueFrom(response);
  return data;
}
