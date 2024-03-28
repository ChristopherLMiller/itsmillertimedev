
import {ApiProperty} from '@nestjs/swagger'


export class Session {
  @ApiProperty()
id: string ;
@ApiProperty()
sid: string ;
@ApiProperty()
data: string ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
expiresAt: Date ;
}
