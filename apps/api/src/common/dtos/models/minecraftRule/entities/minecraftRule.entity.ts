
import {ApiProperty} from '@nestjs/swagger'
import {MinecraftRuleCategory} from '../../minecraftRuleCategory/entities/minecraftRuleCategory.entity'


export class MinecraftRule {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty()
name: string ;
@ApiProperty()
description: string ;
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
  type: 'integer',
  format: 'int32',
})
categoryId: number ;
@ApiProperty({
  type: () => MinecraftRuleCategory,
  required: false,
})
category?: MinecraftRuleCategory ;
}
