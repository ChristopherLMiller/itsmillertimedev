import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ModelWhereUniqueInput } from './model-where-unique.input';
import { Type } from 'class-transformer';
import { ModelCreateWithoutScaleInput } from './model-create-without-scale.input';

@InputType()
export class ModelCreateOrConnectWithoutScaleInput {

    @Field(() => ModelWhereUniqueInput, {nullable:false})
    @Type(() => ModelWhereUniqueInput)
    where!: Prisma.AtLeast<ModelWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ModelCreateWithoutScaleInput, {nullable:false})
    @Type(() => ModelCreateWithoutScaleInput)
    create!: ModelCreateWithoutScaleInput;
}
