
import {ApiProperty} from '@nestjs/swagger'
import {IsOptional,IsString} from 'class-validator'




export class UpdateClockifyTimerDto {
  @ApiProperty({
  required: false,
})
@IsOptional()
@IsString()
projectId?: string ;
@ApiProperty({
  required: false,
})
@IsOptional()
@IsString()
startTime?: string ;
}
