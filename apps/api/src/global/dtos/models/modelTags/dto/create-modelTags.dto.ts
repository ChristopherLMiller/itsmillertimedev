
import {ApiProperty} from '@nestjs/swagger'
import {IsNotEmpty,IsString} from 'class-validator'




export class CreateModelTagsDto {
  @ApiProperty()
@IsNotEmpty()
@IsString()
slug: string ;
@ApiProperty()
@IsNotEmpty()
@IsString()
title: string ;
}
