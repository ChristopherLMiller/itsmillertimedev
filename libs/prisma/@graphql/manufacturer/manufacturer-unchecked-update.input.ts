import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ModelUncheckedUpdateManyWithoutManufacturerNestedInput } from '../model/model-unchecked-update-many-without-manufacturer-nested.input';

@InputType()
export class ManufacturerUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => ModelUncheckedUpdateManyWithoutManufacturerNestedInput, {nullable:true})
    Model?: ModelUncheckedUpdateManyWithoutManufacturerNestedInput;
}
