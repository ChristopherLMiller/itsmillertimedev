
import {ApiProperty} from '@nestjs/swagger'
import {IsBoolean,IsNotEmpty,IsOptional,IsString} from 'class-validator'




export class CreatePageDto {
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
summary: string ;
@ApiProperty({
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
content?: string  | null;
@ApiProperty()
@IsNotEmpty()
@IsBoolean()
isPublic: boolean ;
}
