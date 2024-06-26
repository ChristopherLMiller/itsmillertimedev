/* eslint-disable @typescript-eslint/ban-ts-comment */
import { catchError, firstValueFrom } from "rxjs";
import { axiosErrorHandler } from "./axiosErrorHandler";

export async function dataFetcher<T>(request: any): Promise<T> {
  const response = await request.pipe(catchError(axiosErrorHandler));
  // @ts-ignore
  const { data } = await firstValueFrom(response);
  return data;
}
