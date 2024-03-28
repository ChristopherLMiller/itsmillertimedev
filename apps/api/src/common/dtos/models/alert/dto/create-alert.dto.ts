
import {ApiProperty} from '@nestjs/swagger'
import {IsBoolean,IsDateString,IsNotEmpty,IsString} from 'class-validator'




export class CreateAlertDto {
  @ApiProperty()
@IsNotEmpty()
@IsString()
title: string ;
@ApiProperty()
@IsNotEmpty()
@IsBoolean()
active: boolean ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
@IsNotEmpty()
@IsDateString()
validUntil: Date ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
@IsNotEmpty()
@IsDateString()
startDate: Date ;
}
