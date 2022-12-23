import { registerEnumType } from '@nestjs/graphql';

export enum MinecraftRuleCategoryScalarFieldEnum {
    id = "id",
    name = "name",
    icon = "icon"
}


registerEnumType(MinecraftRuleCategoryScalarFieldEnum, { name: 'MinecraftRuleCategoryScalarFieldEnum', description: undefined })
