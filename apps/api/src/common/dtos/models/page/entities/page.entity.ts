
import {ApiProperty} from '@nestjs/swagger'
import {Image} from '../../image/entities/image.entity'


export class Page {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty()
title: string ;
@ApiProperty()
slug: string ;
@ApiProperty()
summary: string ;
@ApiProperty({
  nullable: true,
})
content: string  | null;
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
  type: () => Image,
  required: false,
  nullable: true,
})
featuredImage?: Image  | null;
@ApiProperty({
  nullable: true,
})
imagePublic_id: string  | null;
@ApiProperty()
isPublic: boolean ;
}
