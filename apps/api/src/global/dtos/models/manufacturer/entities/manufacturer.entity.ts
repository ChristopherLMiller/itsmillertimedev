
import {ApiProperty} from '@nestjs/swagger'
import {Model} from '../../model/entities/model.entity'


export class Manufacturer {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty()
title: string ;
@ApiProperty()
slug: string ;
@ApiProperty({
  type: () => Model,
  isArray: true,
  required: false,
})
Model?: Model[] ;
}
