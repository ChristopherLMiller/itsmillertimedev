import { Model } from './model';
import { ApiProperty } from '@nestjs/swagger';

export class Manufacturer {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  title: string;

  @ApiProperty({ type: String })
  slug: string;

  @ApiProperty({ isArray: true, type: () => Model })
  Model: Model[];
}
