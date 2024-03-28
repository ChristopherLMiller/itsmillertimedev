
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsNotEmpty,IsString} from 'class-validator'




export class CreateDiscordUserSettingDto {
  @ApiProperty()
@IsNotEmpty()
@IsString()
userId: string ;
@ApiProperty({
  type: () => Object,
})
@IsNotEmpty()
meta: Prisma.InputJsonValue ;
}
