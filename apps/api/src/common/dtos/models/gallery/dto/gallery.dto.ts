
import {Visibility} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class GalleryDto {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
createdAt: Date ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
updatedAt: Date ;
@ApiProperty()
title: string ;
@ApiProperty()
slug: string ;
@ApiProperty()
meta: string ;
@ApiProperty()
description: string ;
@ApiProperty({
  enum: Visibility,
})
visibility: Visibility ;
@ApiProperty()
isNsfw: boolean ;
@ApiProperty()
image: string ;
}
