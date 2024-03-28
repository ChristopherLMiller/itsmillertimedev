
import {ApiProperty} from '@nestjs/swagger'
import {Model} from '../../model/entities/model.entity'


export class ModelTags {
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
  type: () => Model,
  required: false,
  nullable: true,
})
Model?: Model  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
modelId: number  | null;
}
