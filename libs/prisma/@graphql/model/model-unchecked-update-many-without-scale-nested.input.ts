import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ModelCreateWithoutScaleInput } from './model-create-without-scale.input';
import { Type } from 'class-transformer';
import { ModelCreateOrConnectWithoutScaleInput } from './model-create-or-connect-without-scale.input';
import { ModelUpsertWithWhereUniqueWithoutScaleInput } from './model-upsert-with-where-unique-without-scale.input';
import { ModelCreateManyScaleInputEnvelope } from './model-create-many-scale-input-envelope.input';
import { ModelWhereUniqueInput } from './model-where-unique.input';
import { ModelUpdateWithWhereUniqueWithoutScaleInput } from './model-update-with-where-unique-without-scale.input';
import { ModelUpdateManyWithWhereWithoutScaleInput } from './model-update-many-with-where-without-scale.input';
import { ModelScalarWhereInput } from './model-scalar-where.input';

@InputType()
export class ModelUncheckedUpdateManyWithoutScaleNestedInput {

    @Field(() => [ModelCreateWithoutScaleInput], {nullable:true})
    @Type(() => ModelCreateWithoutScaleInput)
    create?: Array<ModelCreateWithoutScaleInput>;

    @Field(() => [ModelCreateOrConnectWithoutScaleInput], {nullable:true})
    @Type(() => ModelCreateOrConnectWithoutScaleInput)
    connectOrCreate?: Array<ModelCreateOrConnectWithoutScaleInput>;

    @Field(() => [ModelUpsertWithWhereUniqueWithoutScaleInput], {nullable:true})
    @Type(() => ModelUpsertWithWhereUniqueWithoutScaleInput)
    upsert?: Array<ModelUpsertWithWhereUniqueWithoutScaleInput>;

    @Field(() => ModelCreateManyScaleInputEnvelope, {nullable:true})
    @Type(() => ModelCreateManyScaleInputEnvelope)
    createMany?: ModelCreateManyScaleInputEnvelope;

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

    @Field(() => [ModelUpdateWithWhereUniqueWithoutScaleInput], {nullable:true})
    @Type(() => ModelUpdateWithWhereUniqueWithoutScaleInput)
    update?: Array<ModelUpdateWithWhereUniqueWithoutScaleInput>;

    @Field(() => [ModelUpdateManyWithWhereWithoutScaleInput], {nullable:true})
    @Type(() => ModelUpdateManyWithWhereWithoutScaleInput)
    updateMany?: Array<ModelUpdateManyWithWhereWithoutScaleInput>;

    @Field(() => [ModelScalarWhereInput], {nullable:true})
    @Type(() => ModelScalarWhereInput)
    deleteMany?: Array<ModelScalarWhereInput>;
}
