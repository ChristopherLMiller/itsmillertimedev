
import {ApiProperty} from '@nestjs/swagger'
import {Image} from '../../image/entities/image.entity'
import {PostCategory} from '../../postCategory/entities/postCategory.entity'


export class Post {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty()
title: string ;
@ApiProperty()
metaTitle: string ;
@ApiProperty()
slug: string ;
@ApiProperty()
summary: string ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
wordCount: number ;
@ApiProperty()
published: boolean ;
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
@ApiProperty({
  type: 'string',
  format: 'date-time',
  nullable: true,
})
publishedAt: Date  | null;
@ApiProperty()
content: string ;
@ApiProperty({
  nullable: true,
})
imagePublic_id: string  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
postCategoryId: number ;
@ApiProperty({
  type: () => Image,
  required: false,
  nullable: true,
})
featuredImage?: Image  | null;
@ApiProperty({
  type: () => PostCategory,
  required: false,
})
category?: PostCategory ;
}
