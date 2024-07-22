
import {ApiProperty} from '@nestjs/swagger'


export class PostCategoryDto {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty()
slug: string ;
@ApiProperty()
title: string ;
}
