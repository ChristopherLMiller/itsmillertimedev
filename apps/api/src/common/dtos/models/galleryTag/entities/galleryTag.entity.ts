
import {ApiProperty} from '@nestjs/swagger'
import {Gallery} from '../../gallery/entities/gallery.entity'


export class GalleryTag {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty()
title: string ;
@ApiProperty()
slug: string ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
galleryId: number  | null;
@ApiProperty({
  type: () => Gallery,
  required: false,
  nullable: true,
})
Gallery?: Gallery  | null;
}
