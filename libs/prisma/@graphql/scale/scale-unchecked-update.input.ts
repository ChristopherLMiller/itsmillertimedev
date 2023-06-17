import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ModelUncheckedUpdateManyWithoutScaleNestedInput } from '../model/model-unchecked-update-many-without-scale-nested.input';

@InputType()
export class ScaleUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => ModelUncheckedUpdateManyWithoutScaleNestedInput, {nullable:true})
    Model?: ModelUncheckedUpdateManyWithoutScaleNestedInput;
}
