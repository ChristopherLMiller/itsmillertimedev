
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsOptional,IsString} from 'class-validator'




export class UpdateSettingsDto {
  @ApiProperty({
  required: false,
})
@IsOptional()
@IsString()
key?: string ;
@ApiProperty({
  type: () => Object,
  required: false,
})
@IsOptional()
value?: Prisma.InputJsonValue ;
}
