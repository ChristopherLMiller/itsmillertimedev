
import {Visibility} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {GalleryCategory} from '../../galleryCategory/entities/galleryCategory.entity'
import {GalleryTag} from '../../galleryTag/entities/galleryTag.entity'
import {GalleryImage} from '../../galleryImage/entities/galleryImage.entity'


export class Gallery {
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
@ApiProperty({
  type: () => GalleryCategory,
  isArray: true,
  required: false,
})
categories?: GalleryCategory[] ;
@ApiProperty({
  type: () => GalleryTag,
  isArray: true,
  required: false,
})
tags?: GalleryTag[] ;
@ApiProperty({
  type: () => GalleryImage,
  isArray: true,
  required: false,
})
images?: GalleryImage[] ;
}
