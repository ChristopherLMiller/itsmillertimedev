
import {ApiProperty} from '@nestjs/swagger'
import {Post} from '../../post/entities/post.entity'


export class PostCategory {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty()
slug: string ;
@ApiProperty()
title: string ;
@ApiProperty({
  type: () => Post,
  isArray: true,
  required: false,
})
posts?: Post[] ;
}
