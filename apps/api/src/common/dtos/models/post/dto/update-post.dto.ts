
import {ApiProperty} from '@nestjs/swagger'
import {IsBoolean,IsDateString,IsOptional,IsString} from 'class-validator'




export class UpdatePostDto {
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
metaTitle?: string ;
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
summary?: string ;
@ApiProperty({
  required: false,
})
@IsOptional()
@IsBoolean()
published?: boolean ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  required: false,
  nullable: true,
})
@IsOptional()
@IsDateString()
publishedAt?: Date  | null;
@ApiProperty({
  required: false,
})
@IsOptional()
@IsString()
content?: string ;
}
