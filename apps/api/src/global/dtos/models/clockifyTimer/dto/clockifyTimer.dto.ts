
import {ApiProperty} from '@nestjs/swagger'


export class ClockifyTimerDto {
  @ApiProperty()
projectId: string ;
@ApiProperty()
startTime: string ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
}
