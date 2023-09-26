import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ModelTagsWhereUniqueInput } from './model-tags-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneModelTagsArgs {

    @Field(() => ModelTagsWhereUniqueInput, {nullable:false})
    @Type(() => ModelTagsWhereUniqueInput)
    where!: Prisma.AtLeast<ModelTagsWhereUniqueInput, 'id' | 'slug'>;
}
