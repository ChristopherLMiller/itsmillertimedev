
import {ApiProperty} from '@nestjs/swagger'
import {IsBoolean,IsDateString,IsNotEmpty,IsOptional,IsString} from 'class-validator'




export class CreatePostDto {
  @ApiProperty()
@IsNotEmpty()
@IsString()
title: string ;
@ApiProperty()
@IsNotEmpty()
@IsString()
metaTitle: string ;
@ApiProperty()
@IsNotEmpty()
@IsString()
slug: string ;
@ApiProperty()
@IsNotEmpty()
@IsString()
summary: string ;
@ApiProperty()
@IsNotEmpty()
@IsBoolean()
published: boolean ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  required: false,
  nullable: true,
})
@IsOptional()
@IsDateString()
publishedAt?: Date  | null;
@ApiProperty()
@IsNotEmpty()
@IsString()
content: string ;
}
