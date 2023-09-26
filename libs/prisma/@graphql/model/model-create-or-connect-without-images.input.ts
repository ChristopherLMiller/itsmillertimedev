import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ModelWhereUniqueInput } from './model-where-unique.input';
import { Type } from 'class-transformer';
import { ModelCreateWithoutImagesInput } from './model-create-without-images.input';

@InputType()
export class ModelCreateOrConnectWithoutImagesInput {

    @Field(() => ModelWhereUniqueInput, {nullable:false})
    @Type(() => ModelWhereUniqueInput)
    where!: Prisma.AtLeast<ModelWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ModelCreateWithoutImagesInput, {nullable:false})
    @Type(() => ModelCreateWithoutImagesInput)
    create!: ModelCreateWithoutImagesInput;
}
