import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MinecraftRuleCreateNestedManyWithoutCategoryInput } from '../minecraft-rule/minecraft-rule-create-nested-many-without-category.input';

@InputType()
export class MinecraftRuleCategoryCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    icon!: string;

    @Field(() => MinecraftRuleCreateNestedManyWithoutCategoryInput, {nullable:true})
    MinecraftRules?: MinecraftRuleCreateNestedManyWithoutCategoryInput;
}
