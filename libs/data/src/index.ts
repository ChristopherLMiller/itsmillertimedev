export * from './lib/clockify';
export * from './lib/nationalweatherservice';
export * from './lib/openweathermap';

export interface DataResponse<T> {
  statusCode?: number;
  data: T;
  meta?: Meta;
}

export interface Meta {
  [key: string]: unknown;
}
