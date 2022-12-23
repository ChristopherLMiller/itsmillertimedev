import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MinecraftRuleUncheckedCreateNestedManyWithoutCategoryInput } from '../minecraft-rule/minecraft-rule-unchecked-create-nested-many-without-category.input';

@InputType()
export class MinecraftRuleCategoryUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    icon!: string;

    @Field(() => MinecraftRuleUncheckedCreateNestedManyWithoutCategoryInput, {nullable:true})
    MinecraftRules?: MinecraftRuleUncheckedCreateNestedManyWithoutCategoryInput;
}
