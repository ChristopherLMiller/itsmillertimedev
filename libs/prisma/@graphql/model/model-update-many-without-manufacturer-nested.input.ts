import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ModelCreateWithoutManufacturerInput } from './model-create-without-manufacturer.input';
import { Type } from 'class-transformer';
import { ModelCreateOrConnectWithoutManufacturerInput } from './model-create-or-connect-without-manufacturer.input';
import { ModelUpsertWithWhereUniqueWithoutManufacturerInput } from './model-upsert-with-where-unique-without-manufacturer.input';
import { ModelCreateManyManufacturerInputEnvelope } from './model-create-many-manufacturer-input-envelope.input';
import { ModelWhereUniqueInput } from './model-where-unique.input';
import { ModelUpdateWithWhereUniqueWithoutManufacturerInput } from './model-update-with-where-unique-without-manufacturer.input';
import { ModelUpdateManyWithWhereWithoutManufacturerInput } from './model-update-many-with-where-without-manufacturer.input';
import { ModelScalarWhereInput } from './model-scalar-where.input';

@InputType()
export class ModelUpdateManyWithoutManufacturerNestedInput {

    @Field(() => [ModelCreateWithoutManufacturerInput], {nullable:true})
    @Type(() => ModelCreateWithoutManufacturerInput)
    create?: Array<ModelCreateWithoutManufacturerInput>;

    @Field(() => [ModelCreateOrConnectWithoutManufacturerInput], {nullable:true})
    @Type(() => ModelCreateOrConnectWithoutManufacturerInput)
    connectOrCreate?: Array<ModelCreateOrConnectWithoutManufacturerInput>;

    @Field(() => [ModelUpsertWithWhereUniqueWithoutManufacturerInput], {nullable:true})
    @Type(() => ModelUpsertWithWhereUniqueWithoutManufacturerInput)
    upsert?: Array<ModelUpsertWithWhereUniqueWithoutManufacturerInput>;

    @Field(() => ModelCreateManyManufacturerInputEnvelope, {nullable:true})
    @Type(() => ModelCreateManyManufacturerInputEnvelope)
    createMany?: ModelCreateManyManufacturerInputEnvelope;

    @Field(() => [ModelWhereUniqueInput], {nullable:true})
    @Type(() => ModelWhereUniqueInput)
    set?: Array<ModelWhereUniqueInput>;

    @Field(() => [ModelWhereUniqueInput], {nullable:true})
    @Type(() => ModelWhereUniqueInput)
    disconnect?: Array<ModelWhereUniqueInput>;

    @Field(() => [ModelWhereUniqueInput], {nullable:true})
    @Type(() => ModelWhereUniqueInput)
    delete?: Array<ModelWhereUniqueInput>;

    @Field(() => [ModelWhereUniqueInput], {nullable:true})
    @Type(() => ModelWhereUniqueInput)
    connect?: Array<ModelWhereUniqueInput>;

    @Field(() => [ModelUpdateWithWhereUniqueWithoutManufacturerInput], {nullable:true})
    @Type(() => ModelUpdateWithWhereUniqueWithoutManufacturerInput)
    update?: Array<ModelUpdateWithWhereUniqueWithoutManufacturerInput>;

    @Field(() => [ModelUpdateManyWithWhereWithoutManufacturerInput], {nullable:true})
    @Type(() => ModelUpdateManyWithWhereWithoutManufacturerInput)
    updateMany?: Array<ModelUpdateManyWithWhereWithoutManufacturerInput>;

    @Field(() => [ModelScalarWhereInput], {nullable:true})
    @Type(() => ModelScalarWhereInput)
    deleteMany?: Array<ModelScalarWhereInput>;
}
