
import {ApiProperty} from '@nestjs/swagger'
import {IsNotEmpty,IsString} from 'class-validator'




export class CreateScaleDto {
  @ApiProperty()
@IsNotEmpty()
@IsString()
title: string ;
@ApiProperty()
@IsNotEmpty()
@IsString()
slug: string ;
}
