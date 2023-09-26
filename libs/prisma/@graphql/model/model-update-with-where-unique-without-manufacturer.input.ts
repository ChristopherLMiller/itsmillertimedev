import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ModelWhereUniqueInput } from './model-where-unique.input';
import { Type } from 'class-transformer';
import { ModelUpdateWithoutManufacturerInput } from './model-update-without-manufacturer.input';

@InputType()
export class ModelUpdateWithWhereUniqueWithoutManufacturerInput {

    @Field(() => ModelWhereUniqueInput, {nullable:false})
    @Type(() => ModelWhereUniqueInput)
    where!: Prisma.AtLeast<ModelWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ModelUpdateWithoutManufacturerInput, {nullable:false})
    @Type(() => ModelUpdateWithoutManufacturerInput)
    data!: ModelUpdateWithoutManufacturerInput;
}
