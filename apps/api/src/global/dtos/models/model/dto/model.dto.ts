
import {Visibility} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class ModelDto {
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
}
