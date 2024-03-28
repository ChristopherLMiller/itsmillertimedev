
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class DiscordUserSettingDto {
  @ApiProperty()
userId: string ;
@ApiProperty({
  type: () => Object,
})
meta: Prisma.JsonValue ;
}
