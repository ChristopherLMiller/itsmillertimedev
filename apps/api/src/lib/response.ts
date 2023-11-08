export interface Data<T> {
  statusCode?: number;
  data: T;
  meta?: Meta;
}

export interface Meta {
  [key: string]: unknown;
}

export type DataResponse<T> = Promise<Data<T>>;
