
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsOptional} from 'class-validator'




export class UpdateDiscordUserSettingDto {
  @ApiProperty({
  type: () => Object,
  required: false,
})
@IsOptional()
meta?: Prisma.InputJsonValue ;
}
