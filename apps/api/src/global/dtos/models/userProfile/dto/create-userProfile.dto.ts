
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsNotEmpty,IsOptional,IsString} from 'class-validator'




export class CreateUserProfileDto {
  @ApiProperty()
@IsNotEmpty()
@IsString()
supabaseId: string ;
@ApiProperty()
@IsNotEmpty()
@IsString()
email: string ;
@ApiProperty({
  type: () => Object,
  required: false,
  nullable: true,
})
@IsOptional()
meta?: Prisma.InputJsonValue  | Prisma.NullableJsonNullValueInput;
}
