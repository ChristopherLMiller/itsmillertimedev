import { CustomDecorator, SetMetadata } from '@nestjs/common';

export const ResponseTimeLimit = (limit: number): CustomDecorator<string> =>
  SetMetadata('response-time-limit', limit);
