export * from './lib/clockify';
export * from './lib/nationalweatherservice';
export * from './lib/openweathermap';

export interface Data<T> {
  statusCode?: number;
  data: T;
  meta?: Meta;
}

export interface Meta {
  [key: string]: unknown;
}

export type Response<T> = Promise<Data<T>>;
