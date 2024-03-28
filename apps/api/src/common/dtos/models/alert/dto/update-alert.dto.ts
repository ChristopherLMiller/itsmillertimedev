
import {ApiProperty} from '@nestjs/swagger'
import {IsBoolean,IsDateString,IsOptional,IsString} from 'class-validator'




export class UpdateAlertDto {
  @ApiProperty({
  required: false,
})
@IsOptional()
@IsString()
title?: string ;
@ApiProperty({
  required: false,
})
@IsOptional()
@IsBoolean()
active?: boolean ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  required: false,
})
@IsOptional()
@IsDateString()
validUntil?: Date ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  required: false,
})
@IsOptional()
@IsDateString()
startDate?: Date ;
}
