import { ApiProperty } from "@nestjs/swagger";

export class ClockifyTimer {
  @ApiProperty({ type: String })
  projectId: string;

  @ApiProperty({ type: String })
  startTime: string;

  @ApiProperty({ type: Number })
  id: number;
}
