import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ModelWhereUniqueInput } from './model-where-unique.input';
import { Type } from 'class-transformer';
import { ModelUpdateWithoutScaleInput } from './model-update-without-scale.input';

@InputType()
export class ModelUpdateWithWhereUniqueWithoutScaleInput {

    @Field(() => ModelWhereUniqueInput, {nullable:false})
    @Type(() => ModelWhereUniqueInput)
    where!: Prisma.AtLeast<ModelWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ModelUpdateWithoutScaleInput, {nullable:false})
    @Type(() => ModelUpdateWithoutScaleInput)
    data!: ModelUpdateWithoutScaleInput;
}
