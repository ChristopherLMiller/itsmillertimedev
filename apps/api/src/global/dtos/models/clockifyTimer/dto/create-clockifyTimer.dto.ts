
import {ApiProperty} from '@nestjs/swagger'
import {IsNotEmpty,IsString} from 'class-validator'




export class CreateClockifyTimerDto {
  @ApiProperty()
@IsNotEmpty()
@IsString()
projectId: string ;
@ApiProperty()
@IsNotEmpty()
@IsString()
startTime: string ;
}
