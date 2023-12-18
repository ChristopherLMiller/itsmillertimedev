import { ApiProperty } from "@nestjs/swagger";

export class Session {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ type: String })
  sid: string;

  @ApiProperty({ type: String })
  data: string;

  @ApiProperty({ type: Date })
  expiresAt: Date;
}
