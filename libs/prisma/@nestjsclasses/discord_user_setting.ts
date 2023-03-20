import { ApiProperty } from '@nestjs/swagger';

export class DiscordUserSetting {
  @ApiProperty({ type: String })
  userId: string;

  @ApiProperty({ type: Object })
  meta: object;
}
