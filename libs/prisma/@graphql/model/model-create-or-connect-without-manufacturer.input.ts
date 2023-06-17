import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ModelWhereUniqueInput } from './model-where-unique.input';
import { Type } from 'class-transformer';
import { ModelCreateWithoutManufacturerInput } from './model-create-without-manufacturer.input';

@InputType()
export class ModelCreateOrConnectWithoutManufacturerInput {

    @Field(() => ModelWhereUniqueInput, {nullable:false})
    @Type(() => ModelWhereUniqueInput)
    where!: ModelWhereUniqueInput;

    @Field(() => ModelCreateWithoutManufacturerInput, {nullable:false})
    @Type(() => ModelCreateWithoutManufacturerInput)
    create!: ModelCreateWithoutManufacturerInput;
}
