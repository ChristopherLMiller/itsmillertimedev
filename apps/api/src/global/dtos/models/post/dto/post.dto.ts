
import {ApiProperty} from '@nestjs/swagger'


export class PostDto {
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
}
