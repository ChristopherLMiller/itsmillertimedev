import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ModelTagsUpdateInput } from './model-tags-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ModelTagsWhereUniqueInput } from './model-tags-where-unique.input';

@ArgsType()
export class UpdateOneModelTagsArgs {

    @Field(() => ModelTagsUpdateInput, {nullable:false})
    @Type(() => ModelTagsUpdateInput)
    data!: ModelTagsUpdateInput;

    @Field(() => ModelTagsWhereUniqueInput, {nullable:false})
    @Type(() => ModelTagsWhereUniqueInput)
    where!: Prisma.AtLeast<ModelTagsWhereUniqueInput, 'id' | 'slug'>;
}
