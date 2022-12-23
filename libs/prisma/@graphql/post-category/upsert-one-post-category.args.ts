import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostCategoryWhereUniqueInput } from './post-category-where-unique.input';
import { Type } from 'class-transformer';
import { PostCategoryCreateInput } from './post-category-create.input';
import { PostCategoryUpdateInput } from './post-category-update.input';

@ArgsType()
export class UpsertOnePostCategoryArgs {

    @Field(() => PostCategoryWhereUniqueInput, {nullable:false})
    @Type(() => PostCategoryWhereUniqueInput)
    where!: PostCategoryWhereUniqueInput;

    @Field(() => PostCategoryCreateInput, {nullable:false})
    @Type(() => PostCategoryCreateInput)
    create!: PostCategoryCreateInput;

    @Field(() => PostCategoryUpdateInput, {nullable:false})
    @Type(() => PostCategoryUpdateInput)
    update!: PostCategoryUpdateInput;
}
