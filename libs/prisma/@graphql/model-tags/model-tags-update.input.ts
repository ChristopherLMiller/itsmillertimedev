import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ModelUpdateOneWithoutTagsNestedInput } from '../model/model-update-one-without-tags-nested.input';

@InputType()
export class ModelTagsUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => ModelUpdateOneWithoutTagsNestedInput, {nullable:true})
    Model?: ModelUpdateOneWithoutTagsNestedInput;
}
