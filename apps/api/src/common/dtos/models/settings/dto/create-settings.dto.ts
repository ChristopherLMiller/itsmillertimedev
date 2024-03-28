
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsNotEmpty,IsString} from 'class-validator'




export class CreateSettingsDto {
  @ApiProperty()
@IsNotEmpty()
@IsString()
key: string ;
@ApiProperty({
  type: () => Object,
})
@IsNotEmpty()
value: Prisma.InputJsonValue ;
}
