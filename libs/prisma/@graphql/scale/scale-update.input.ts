import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ModelUpdateManyWithoutScaleNestedInput } from '../model/model-update-many-without-scale-nested.input';

@InputType()
export class ScaleUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => ModelUpdateManyWithoutScaleNestedInput, {nullable:true})
    Model?: ModelUpdateManyWithoutScaleNestedInput;
}
