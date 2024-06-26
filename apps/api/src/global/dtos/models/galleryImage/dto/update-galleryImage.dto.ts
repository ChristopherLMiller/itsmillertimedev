
import {PublicationStatus,Visibility} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsDateString,IsOptional,IsString} from 'class-validator'




export class UpdateGalleryImageDto {
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
  enum: PublicationStatus,
  required: false,
})
@IsOptional()
published?: PublicationStatus ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
  required: false,
})
@IsOptional()
@IsDateString()
publishedAt?: Date ;
@ApiProperty({
  enum: Visibility,
  required: false,
  nullable: true,
})
@IsOptional()
visibility?: Visibility  | null;
@ApiProperty({
  required: false,
})
@IsOptional()
@IsString()
url?: string ;
}
