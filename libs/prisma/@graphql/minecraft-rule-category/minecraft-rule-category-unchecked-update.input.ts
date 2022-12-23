import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MinecraftRuleUncheckedUpdateManyWithoutCategoryNestedInput } from '../minecraft-rule/minecraft-rule-unchecked-update-many-without-category-nested.input';

@InputType()
export class MinecraftRuleCategoryUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    icon?: StringFieldUpdateOperationsInput;

    @Field(() => MinecraftRuleUncheckedUpdateManyWithoutCategoryNestedInput, {nullable:true})
    MinecraftRules?: MinecraftRuleUncheckedUpdateManyWithoutCategoryNestedInput;
}
