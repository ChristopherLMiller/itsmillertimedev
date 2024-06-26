
import {ApiProperty} from '@nestjs/swagger'


export class GalleryTagDto {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty()
title: string ;
@ApiProperty()
slug: string ;
}
