import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ModelCreateWithoutManufacturerInput } from './model-create-without-manufacturer.input';
import { Type } from 'class-transformer';
import { ModelCreateOrConnectWithoutManufacturerInput } from './model-create-or-connect-without-manufacturer.input';
import { ModelCreateManyManufacturerInputEnvelope } from './model-create-many-manufacturer-input-envelope.input';
import { ModelWhereUniqueInput } from './model-where-unique.input';

@InputType()
export class ModelCreateNestedManyWithoutManufacturerInput {

    @Field(() => [ModelCreateWithoutManufacturerInput], {nullable:true})
    @Type(() => ModelCreateWithoutManufacturerInput)
    create?: Array<ModelCreateWithoutManufacturerInput>;

    @Field(() => [ModelCreateOrConnectWithoutManufacturerInput], {nullable:true})
    @Type(() => ModelCreateOrConnectWithoutManufacturerInput)
    connectOrCreate?: Array<ModelCreateOrConnectWithoutManufacturerInput>;

    @Field(() => ModelCreateManyManufacturerInputEnvelope, {nullable:true})
    @Type(() => ModelCreateManyManufacturerInputEnvelope)
    createMany?: ModelCreateManyManufacturerInputEnvelope;

    @Field(() => [ModelWhereUniqueInput], {nullable:true})
    @Type(() => ModelWhereUniqueInput)
    connect?: Array<ModelWhereUniqueInput>;
}
