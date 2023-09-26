import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ModelTagsWhereUniqueInput } from './model-tags-where-unique.input';
import { Type } from 'class-transformer';
import { ModelTagsUpdateWithoutModelInput } from './model-tags-update-without-model.input';

@InputType()
export class ModelTagsUpdateWithWhereUniqueWithoutModelInput {

    @Field(() => ModelTagsWhereUniqueInput, {nullable:false})
    @Type(() => ModelTagsWhereUniqueInput)
    where!: Prisma.AtLeast<ModelTagsWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ModelTagsUpdateWithoutModelInput, {nullable:false})
    @Type(() => ModelTagsUpdateWithoutModelInput)
    data!: ModelTagsUpdateWithoutModelInput;
}
