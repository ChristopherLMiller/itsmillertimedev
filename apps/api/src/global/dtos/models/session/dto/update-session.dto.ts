
import {ApiProperty} from '@nestjs/swagger'
import {IsDateString,IsOptional,IsString} from 'class-validator'




export class UpdateSessionDto {
  @ApiProperty({
  required: false,
})
@IsOptional()
@IsString()
sid?: string ;
@ApiProperty({
  required: false,
})
@IsOptional()
@IsString()
data?: string ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  required: false,
})
@IsOptional()
@IsDateString()
expiresAt?: Date ;
}
