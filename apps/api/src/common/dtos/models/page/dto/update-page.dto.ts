
import {ApiProperty} from '@nestjs/swagger'
import {IsBoolean,IsOptional,IsString} from 'class-validator'




export class UpdatePageDto {
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
summary?: string ;
@ApiProperty({
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
content?: string  | null;
@ApiProperty({
  required: false,
})
@IsOptional()
@IsBoolean()
isPublic?: boolean ;
}
