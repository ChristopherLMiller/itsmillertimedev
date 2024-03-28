
import {ApiProperty} from '@nestjs/swagger'
import {IsOptional,IsString} from 'class-validator'




export class UpdateModelTagsDto {
  @ApiProperty({
  required: false,
})
@IsOptional()
@IsString()
slug?: string ;
@ApiProperty({
  required: false,
})
@IsOptional()
@IsString()
title?: string ;
}
