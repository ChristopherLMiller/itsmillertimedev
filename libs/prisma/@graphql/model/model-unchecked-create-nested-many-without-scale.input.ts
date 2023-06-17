import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ModelCreateWithoutScaleInput } from './model-create-without-scale.input';
import { Type } from 'class-transformer';
import { ModelCreateOrConnectWithoutScaleInput } from './model-create-or-connect-without-scale.input';
import { ModelCreateManyScaleInputEnvelope } from './model-create-many-scale-input-envelope.input';
import { ModelWhereUniqueInput } from './model-where-unique.input';

@InputType()
export class ModelUncheckedCreateNestedManyWithoutScaleInput {

    @Field(() => [ModelCreateWithoutScaleInput], {nullable:true})
    @Type(() => ModelCreateWithoutScaleInput)
    create?: Array<ModelCreateWithoutScaleInput>;

    @Field(() => [ModelCreateOrConnectWithoutScaleInput], {nullable:true})
    @Type(() => ModelCreateOrConnectWithoutScaleInput)
    connectOrCreate?: Array<ModelCreateOrConnectWithoutScaleInput>;

    @Field(() => ModelCreateManyScaleInputEnvelope, {nullable:true})
    @Type(() => ModelCreateManyScaleInputEnvelope)
    createMany?: ModelCreateManyScaleInputEnvelope;

    @Field(() => [ModelWhereUniqueInput], {nullable:true})
    @Type(() => ModelWhereUniqueInput)
    connect?: Array<ModelWhereUniqueInput>;
}
