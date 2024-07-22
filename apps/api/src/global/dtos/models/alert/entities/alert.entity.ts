
import {ApiProperty} from '@nestjs/swagger'


export class Alert {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty()
title: string ;
@ApiProperty()
active: boolean ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
validUntil: Date ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
startDate: Date ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
AlertAttempts: number ;
}
