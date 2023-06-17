import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ModelWhereUniqueInput } from './model-where-unique.input';
import { Type } from 'class-transformer';
import { ModelCreateWithoutScaleInput } from './model-create-without-scale.input';

@InputType()
export class ModelCreateOrConnectWithoutScaleInput {

    @Field(() => ModelWhereUniqueInput, {nullable:false})
    @Type(() => ModelWhereUniqueInput)
    where!: ModelWhereUniqueInput;

    @Field(() => ModelCreateWithoutScaleInput, {nullable:false})
    @Type(() => ModelCreateWithoutScaleInput)
    create!: ModelCreateWithoutScaleInput;
}
