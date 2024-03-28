
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {UserProfile} from '../../userProfile/entities/userProfile.entity'


export class DiscordUserSetting {
  @ApiProperty()
userId: string ;
@ApiProperty({
  type: () => Object,
})
meta: Prisma.JsonValue ;
@ApiProperty({
  type: () => UserProfile,
  isArray: true,
  required: false,
})
UserProfile?: UserProfile[] ;
}
