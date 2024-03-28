
import {ApiProperty} from '@nestjs/swagger'


export class GalleryCategoryDto {
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
