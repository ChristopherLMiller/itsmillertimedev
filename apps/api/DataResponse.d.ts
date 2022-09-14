export interface DataResponse<T> {
  statusCode?: number;
  data: T;
  meta: Meta;
}

export interface Meta {
  [key: string]: unknown;
}
