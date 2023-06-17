import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ModelCreateNestedManyWithoutManufacturerInput } from '../model/model-create-nested-many-without-manufacturer.input';

@InputType()
export class ManufacturerCreateInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => ModelCreateNestedManyWithoutManufacturerInput, {nullable:true})
    Model?: ModelCreateNestedManyWithoutManufacturerInput;
}
