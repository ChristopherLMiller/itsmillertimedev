
import {Visibility} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsDateString,IsInt,IsOptional,IsString} from 'class-validator'




export class UpdateModelDto {
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
  enum: Visibility,
  required: false,
})
@IsOptional()
visibility?: Visibility ;
@ApiProperty({
  required: false,
})
@IsOptional()
@IsString()
metaTitle?: string ;
@ApiProperty({
  required: false,
})
@IsOptional()
@IsString()
summary?: string ;
@ApiProperty({
  required: false,
})
@IsOptional()
@IsString()
featuredImage?: string ;
@ApiProperty({
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
clockifyProjectId?: string  | null;
@ApiProperty({
  required: false,
})
@IsOptional()
@IsString()
contents?: string ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  required: false,
})
@IsOptional()
@IsInt()
yearReleased?: number ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  required: false,
})
@IsOptional()
@IsDateString()
completedAt?: Date ;
@ApiProperty({
  required: false,
})
@IsOptional()
@IsString()
imagePublic_id?: string ;
}
