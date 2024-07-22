
import {ApiProperty} from '@nestjs/swagger'
import {MinecraftRule} from '../../minecraftRule/entities/minecraftRule.entity'


export class MinecraftRuleCategory {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty()
name: string ;
@ApiProperty()
icon: string ;
@ApiProperty({
  type: () => MinecraftRule,
  isArray: true,
  required: false,
})
MinecraftRules?: MinecraftRule[] ;
}
