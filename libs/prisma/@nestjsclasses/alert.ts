import { ApiProperty } from '@nestjs/swagger';

export class Alert {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  title: string;

  @ApiProperty({ type: Boolean })
  active: boolean;

  @ApiProperty({ type: Date })
  validUntil: Date;

  @ApiProperty({ type: Date })
  startDate: Date;

  @ApiProperty({ type: Number })
  AlertAttempts: number = 1;
}
