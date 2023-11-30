import { CustomDecorator, SetMetadata } from '@nestjs/common';

export const NoLogging = (): CustomDecorator<string> =>
  SetMetadata('no-logging', true);
