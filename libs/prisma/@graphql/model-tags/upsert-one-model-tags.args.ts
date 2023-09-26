import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ModelTagsWhereUniqueInput } from './model-tags-where-unique.input';
import { Type } from 'class-transformer';
import { ModelTagsCreateInput } from './model-tags-create.input';
import { ModelTagsUpdateInput } from './model-tags-update.input';

@ArgsType()
export class UpsertOneModelTagsArgs {

    @Field(() => ModelTagsWhereUniqueInput, {nullable:false})
    @Type(() => ModelTagsWhereUniqueInput)
    where!: Prisma.AtLeast<ModelTagsWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ModelTagsCreateInput, {nullable:false})
    @Type(() => ModelTagsCreateInput)
    create!: ModelTagsCreateInput;

    @Field(() => ModelTagsUpdateInput, {nullable:false})
    @Type(() => ModelTagsUpdateInput)
    update!: ModelTagsUpdateInput;
}
