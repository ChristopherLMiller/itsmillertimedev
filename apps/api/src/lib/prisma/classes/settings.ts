import { ApiProperty } from "@nestjs/swagger";

export class Settings {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  key: string;

  @ApiProperty({ type: Object })
  value: object;
}
