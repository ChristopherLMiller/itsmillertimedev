import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MinecraftRuleUpdateManyWithoutCategoryNestedInput } from '../minecraft-rule/minecraft-rule-update-many-without-category-nested.input';

@InputType()
export class MinecraftRuleCategoryUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    icon?: StringFieldUpdateOperationsInput;

    @Field(() => MinecraftRuleUpdateManyWithoutCategoryNestedInput, {nullable:true})
    MinecraftRules?: MinecraftRuleUpdateManyWithoutCategoryNestedInput;
}
