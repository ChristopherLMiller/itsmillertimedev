
import {ApiProperty} from '@nestjs/swagger'


export class ModelTagsDto {
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
