
import {ApiProperty} from '@nestjs/swagger'
import {IsDateString,IsNotEmpty,IsString} from 'class-validator'




export class CreateSessionDto {
  @ApiProperty()
@IsNotEmpty()
@IsString()
id: string ;
@ApiProperty()
@IsNotEmpty()
@IsString()
sid: string ;
@ApiProperty()
@IsNotEmpty()
@IsString()
data: string ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
@IsNotEmpty()
@IsDateString()
expiresAt: Date ;
}
