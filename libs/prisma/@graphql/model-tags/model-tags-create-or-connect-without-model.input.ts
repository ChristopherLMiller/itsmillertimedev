import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ModelTagsWhereUniqueInput } from './model-tags-where-unique.input';
import { Type } from 'class-transformer';
import { ModelTagsCreateWithoutModelInput } from './model-tags-create-without-model.input';

@InputType()
export class ModelTagsCreateOrConnectWithoutModelInput {

    @Field(() => ModelTagsWhereUniqueInput, {nullable:false})
    @Type(() => ModelTagsWhereUniqueInput)
    where!: Prisma.AtLeast<ModelTagsWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ModelTagsCreateWithoutModelInput, {nullable:false})
    @Type(() => ModelTagsCreateWithoutModelInput)
    create!: ModelTagsCreateWithoutModelInput;
}
