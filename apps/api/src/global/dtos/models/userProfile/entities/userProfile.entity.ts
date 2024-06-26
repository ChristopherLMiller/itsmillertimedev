
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {Role} from '../../role/entities/role.entity'
import {DiscordUserSetting} from '../../discordUserSetting/entities/discordUserSetting.entity'


export class UserProfile {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty()
supabaseId: string ;
@ApiProperty()
email: string ;
@ApiProperty({
  type: () => Role,
  required: false,
})
role?: Role ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
roleId: number ;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
meta: Prisma.JsonValue  | null;
@ApiProperty({
  type: () => DiscordUserSetting,
  required: false,
  nullable: true,
})
discord?: DiscordUserSetting  | null;
@ApiProperty({
  nullable: true,
})
discordUserSettingUserId: string  | null;
}
