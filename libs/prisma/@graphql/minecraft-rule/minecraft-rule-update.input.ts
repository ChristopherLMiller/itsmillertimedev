import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MinecraftRuleCategoryUpdateOneRequiredWithoutMinecraftRulesNestedInput } from '../minecraft-rule-category/minecraft-rule-category-update-one-required-without-minecraft-rules-nested.input';

@InputType()
export class MinecraftRuleUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => MinecraftRuleCategoryUpdateOneRequiredWithoutMinecraftRulesNestedInput, {nullable:true})
    category?: MinecraftRuleCategoryUpdateOneRequiredWithoutMinecraftRulesNestedInput;
}
