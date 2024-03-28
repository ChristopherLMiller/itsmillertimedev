
import {PublicationStatus,Visibility} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsDateString,IsNotEmpty,IsOptional,IsString} from 'class-validator'




export class CreateGalleryImageDto {
  @ApiProperty()
@IsNotEmpty()
@IsString()
title: string ;
@ApiProperty()
@IsNotEmpty()
@IsString()
slug: string ;
@ApiProperty({
  enum: PublicationStatus,
})
@IsNotEmpty()
published: PublicationStatus ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
@IsNotEmpty()
@IsDateString()
publishedAt: Date ;
@ApiProperty({
  enum: Visibility,
  required: false,
  nullable: true,
})
@IsOptional()
visibility?: Visibility  | null;
@ApiProperty()
@IsNotEmpty()
@IsString()
url: string ;
}
