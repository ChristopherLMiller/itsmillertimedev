import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ModelWhereUniqueInput } from './model-where-unique.input';
import { Type } from 'class-transformer';
import { ModelUpdateWithoutScaleInput } from './model-update-without-scale.input';

@InputType()
export class ModelUpdateWithWhereUniqueWithoutScaleInput {

    @Field(() => ModelWhereUniqueInput, {nullable:false})
    @Type(() => ModelWhereUniqueInput)
    where!: ModelWhereUniqueInput;

    @Field(() => ModelUpdateWithoutScaleInput, {nullable:false})
    @Type(() => ModelUpdateWithoutScaleInput)
    data!: ModelUpdateWithoutScaleInput;
}