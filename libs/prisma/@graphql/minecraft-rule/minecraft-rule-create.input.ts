import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MinecraftRuleCategoryCreateNestedOneWithoutMinecraftRulesInput } from '../minecraft-rule-category/minecraft-rule-category-create-nested-one-without-minecraft-rules.input';

@InputType()
export class MinecraftRuleCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => MinecraftRuleCategoryCreateNestedOneWithoutMinecraftRulesInput, {nullable:false})
    category!: MinecraftRuleCategoryCreateNestedOneWithoutMinecraftRulesInput;
}
