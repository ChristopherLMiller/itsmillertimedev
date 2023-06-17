import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ModelUncheckedCreateNestedManyWithoutManufacturerInput } from '../model/model-unchecked-create-nested-many-without-manufacturer.input';

@InputType()
export class ManufacturerUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => ModelUncheckedCreateNestedManyWithoutManufacturerInput, {nullable:true})
    Model?: ModelUncheckedCreateNestedManyWithoutManufacturerInput;
}
