import { CustomDecorator, SetMetadata } from '@nestjs/common';

export const IgnoreLogging = (): CustomDecorator<string> =>
  SetMetadata('ignore-logging', true);
