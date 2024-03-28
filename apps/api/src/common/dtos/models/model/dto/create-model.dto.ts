
import {Visibility} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsDateString,IsInt,IsNotEmpty,IsOptional,IsString} from 'class-validator'




export class CreateModelDto {
  @ApiProperty()
@IsNotEmpty()
@IsString()
title: string ;
@ApiProperty()
@IsNotEmpty()
@IsString()
slug: string ;
@ApiProperty({
  enum: Visibility,
})
@IsNotEmpty()
visibility: Visibility ;
@ApiProperty()
@IsNotEmpty()
@IsString()
metaTitle: string ;
@ApiProperty()
@IsNotEmpty()
@IsString()
summary: string ;
@ApiProperty()
@IsNotEmpty()
@IsString()
featuredImage: string ;
@ApiProperty({
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
clockifyProjectId?: string  | null;
@ApiProperty()
@IsNotEmpty()
@IsString()
contents: string ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
@IsNotEmpty()
@IsInt()
yearReleased: number ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
@IsNotEmpty()
@IsDateString()
completedAt: Date ;
@ApiProperty()
@IsNotEmpty()
@IsString()
imagePublic_id: string ;
}
