
import {ApiProperty} from '@nestjs/swagger'
import {IsNotEmpty,IsString} from 'class-validator'




export class CreateGalleryDto {
  @ApiProperty()
@IsNotEmpty()
@IsString()
title: string ;
@ApiProperty()
@IsNotEmpty()
@IsString()
slug: string ;
@ApiProperty()
@IsNotEmpty()
@IsString()
meta: string ;
@ApiProperty()
@IsNotEmpty()
@IsString()
description: string ;
@ApiProperty()
@IsNotEmpty()
@IsString()
image: string ;
}
