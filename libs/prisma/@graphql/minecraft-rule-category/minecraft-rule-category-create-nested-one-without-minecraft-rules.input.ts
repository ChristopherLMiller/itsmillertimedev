import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MinecraftRuleCategoryCreateWithoutMinecraftRulesInput } from './minecraft-rule-category-create-without-minecraft-rules.input';
import { Type } from 'class-transformer';
import { MinecraftRuleCategoryCreateOrConnectWithoutMinecraftRulesInput } from './minecraft-rule-category-create-or-connect-without-minecraft-rules.input';
import { Prisma } from '@prisma/client';
import { MinecraftRuleCategoryWhereUniqueInput } from './minecraft-rule-category-where-unique.input';

@InputType()
export class MinecraftRuleCategoryCreateNestedOneWithoutMinecraftRulesInput {

    @Field(() => MinecraftRuleCategoryCreateWithoutMinecraftRulesInput, {nullable:true})
    @Type(() => MinecraftRuleCategoryCreateWithoutMinecraftRulesInput)
    create?: MinecraftRuleCategoryCreateWithoutMinecraftRulesInput;

    @Field(() => MinecraftRuleCategoryCreateOrConnectWithoutMinecraftRulesInput, {nullable:true})
    @Type(() => MinecraftRuleCategoryCreateOrConnectWithoutMinecraftRulesInput)
    connectOrCreate?: MinecraftRuleCategoryCreateOrConnectWithoutMinecraftRulesInput;

    @Field(() => MinecraftRuleCategoryWhereUniqueInput, {nullable:true})
    @Type(() => MinecraftRuleCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<MinecraftRuleCategoryWhereUniqueInput, 'id' | 'name'>;
}
