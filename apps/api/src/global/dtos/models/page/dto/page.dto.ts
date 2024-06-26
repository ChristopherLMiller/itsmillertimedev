
import {ApiProperty} from '@nestjs/swagger'


export class PageDto {
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
@ApiProperty()
isPublic: boolean ;
}
