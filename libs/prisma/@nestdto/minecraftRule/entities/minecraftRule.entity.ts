
import {MinecraftRuleCategory} from '../../minecraftRuleCategory/entities/minecraftRuleCategory.entity'


export class MinecraftRule {
  id: number ;
name: string ;
description: string ;
createdAt: Date ;
updatedAt: Date ;
categoryId: number ;
category?: MinecraftRuleCategory ;
}
