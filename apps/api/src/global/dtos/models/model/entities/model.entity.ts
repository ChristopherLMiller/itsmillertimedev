
import {Visibility} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {ModelTags} from '../../modelTags/entities/modelTags.entity'
import {Image} from '../../image/entities/image.entity'
import {Manufacturer} from '../../manufacturer/entities/manufacturer.entity'
import {Scale} from '../../scale/entities/scale.entity'


export class Model {
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
completed: boolean ;
@ApiProperty({
  enum: Visibility,
})
visibility: Visibility ;
@ApiProperty()
metaTitle: string ;
@ApiProperty()
summary: string ;
@ApiProperty()
featuredImage: string ;
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
  type: () => ModelTags,
  isArray: true,
  required: false,
})
tags?: ModelTags[] ;
@ApiProperty({
  type: () => Image,
  isArray: true,
  required: false,
})
images?: Image[] ;
@ApiProperty({
  type: () => Manufacturer,
  required: false,
})
manufacturer?: Manufacturer ;
@ApiProperty({
  type: () => Scale,
  required: false,
})
scale?: Scale ;
@ApiProperty({
  nullable: true,
})
clockifyProjectId: string  | null;
@ApiProperty()
contents: string ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
yearReleased: number ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
completedAt: Date ;
@ApiProperty()
imagePublic_id: string ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
manufacturerId: number ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
scaleId: number ;
}
