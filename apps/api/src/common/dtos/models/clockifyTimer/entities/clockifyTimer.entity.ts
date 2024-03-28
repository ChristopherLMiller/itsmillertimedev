
import {ApiProperty} from '@nestjs/swagger'


export class ClockifyTimer {
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
