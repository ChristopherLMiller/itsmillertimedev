export interface ApiData<T> {
  statusCode?: number;
  data: T;
  meta?: ApiMeta;
}

export interface ApiMeta {
  [key: string]: unknown;
}

export type DataResponse<T> = Promise<ApiData<T>>;
