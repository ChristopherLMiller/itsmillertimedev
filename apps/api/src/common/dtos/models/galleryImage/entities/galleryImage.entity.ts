
import {PublicationStatus,Visibility} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {Gallery} from '../../gallery/entities/gallery.entity'


export class GalleryImage {
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
@ApiProperty({
  enum: PublicationStatus,
})
published: PublicationStatus ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
publishedAt: Date ;
@ApiProperty({
  enum: Visibility,
  nullable: true,
})
visibility: Visibility  | null;
@ApiProperty()
url: string ;
@ApiProperty({
  type: () => Gallery,
  isArray: true,
  required: false,
})
galleries?: Gallery[] ;
}
