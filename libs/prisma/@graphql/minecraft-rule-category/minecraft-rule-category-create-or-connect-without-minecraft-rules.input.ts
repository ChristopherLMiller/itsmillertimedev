import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MinecraftRuleCategoryWhereUniqueInput } from './minecraft-rule-category-where-unique.input';
import { Type } from 'class-transformer';
import { MinecraftRuleCategoryCreateWithoutMinecraftRulesInput } from './minecraft-rule-category-create-without-minecraft-rules.input';

@InputType()
export class MinecraftRuleCategoryCreateOrConnectWithoutMinecraftRulesInput {

    @Field(() => MinecraftRuleCategoryWhereUniqueInput, {nullable:false})
    @Type(() => MinecraftRuleCategoryWhereUniqueInput)
    where!: MinecraftRuleCategoryWhereUniqueInput;

    @Field(() => MinecraftRuleCategoryCreateWithoutMinecraftRulesInput, {nullable:false})
    @Type(() => MinecraftRuleCategoryCreateWithoutMinecraftRulesInput)
    create!: MinecraftRuleCategoryCreateWithoutMinecraftRulesInput;
}
