import { Model } from './model';
import { ApiProperty } from '@nestjs/swagger';

export class Scale {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  title: string;

  @ApiProperty({ type: String })
  slug: string;

  @ApiProperty({ isArray: true, type: () => Model })
  Model: Model[];
}
