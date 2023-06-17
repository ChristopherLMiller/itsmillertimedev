import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ModelUpdateManyWithoutManufacturerNestedInput } from '../model/model-update-many-without-manufacturer-nested.input';

@InputType()
export class ManufacturerUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => ModelUpdateManyWithoutManufacturerNestedInput, {nullable:true})
    Model?: ModelUpdateManyWithoutManufacturerNestedInput;
}
