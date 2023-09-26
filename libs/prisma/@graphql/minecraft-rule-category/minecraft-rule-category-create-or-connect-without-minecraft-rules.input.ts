import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MinecraftRuleCategoryWhereUniqueInput } from './minecraft-rule-category-where-unique.input';
import { Type } from 'class-transformer';
import { MinecraftRuleCategoryCreateWithoutMinecraftRulesInput } from './minecraft-rule-category-create-without-minecraft-rules.input';

@InputType()
export class MinecraftRuleCategoryCreateOrConnectWithoutMinecraftRulesInput {

    @Field(() => MinecraftRuleCategoryWhereUniqueInput, {nullable:false})
    @Type(() => MinecraftRuleCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<MinecraftRuleCategoryWhereUniqueInput, 'id' | 'name'>;

    @Field(() => MinecraftRuleCategoryCreateWithoutMinecraftRulesInput, {nullable:false})
    @Type(() => MinecraftRuleCategoryCreateWithoutMinecraftRulesInput)
    create!: MinecraftRuleCategoryCreateWithoutMinecraftRulesInput;
}
