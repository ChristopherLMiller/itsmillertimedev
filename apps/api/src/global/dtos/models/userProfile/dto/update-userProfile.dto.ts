
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsOptional,IsString} from 'class-validator'




export class UpdateUserProfileDto {
  @ApiProperty({
  required: false,
})
@IsOptional()
@IsString()
supabaseId?: string ;
@ApiProperty({
  required: false,
})
@IsOptional()
@IsString()
email?: string ;
@ApiProperty({
  type: () => Object,
  required: false,
  nullable: true,
})
@IsOptional()
meta?: Prisma.InputJsonValue  | Prisma.NullableJsonNullValueInput;
}
