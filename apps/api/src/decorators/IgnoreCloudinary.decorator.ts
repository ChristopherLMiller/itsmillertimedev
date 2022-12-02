import { SetMetadata } from '@nestjs/common';

export const IgnoreCloudinary = () => SetMetadata('ignoreCloudinary', true);
