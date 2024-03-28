
import {ApiProperty} from '@nestjs/swagger'
import {IsOptional,IsString} from 'class-validator'




export class UpdateManufacturerDto {
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
@IsString()
slug?: string ;
}
