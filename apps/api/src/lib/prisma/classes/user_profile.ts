import { Role } from "./role";
import { DiscordUserSetting } from "./discord_user_setting";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class UserProfile {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  supabaseId: string;

  @ApiProperty({ type: String })
  email: string;

  @ApiProperty({ type: () => Role })
  role: Role;

  @ApiProperty({ type: Number })
  roleId: number;

  @ApiPropertyOptional({ type: Object })
  meta?: object;

  @ApiPropertyOptional({ type: () => DiscordUserSetting })
  discord?: DiscordUserSetting;

  @ApiPropertyOptional({ type: String })
  discordUserSettingUserId?: string;
}
