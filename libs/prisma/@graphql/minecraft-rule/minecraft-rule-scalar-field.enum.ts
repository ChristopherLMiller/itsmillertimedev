import { registerEnumType } from '@nestjs/graphql';

export enum MinecraftRuleScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    categoryId = "categoryId"
}


registerEnumType(MinecraftRuleScalarFieldEnum, { name: 'MinecraftRuleScalarFieldEnum', description: undefined })
