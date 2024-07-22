
import {ApiProperty} from '@nestjs/swagger'
import {IsOptional,IsString} from 'class-validator'




export class UpdateGalleryDto {
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
@ApiProperty({
  required: false,
})
@IsOptional()
@IsString()
meta?: string ;
@ApiProperty({
  required: false,
})
@IsOptional()
@IsString()
description?: string ;
@ApiProperty({
  required: false,
})
@IsOptional()
@IsString()
image?: string ;
}
