import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostCategoryUpdateInput } from './post-category-update.input';
import { Type } from 'class-transformer';
import { PostCategoryWhereUniqueInput } from './post-category-where-unique.input';

@ArgsType()
export class UpdateOnePostCategoryArgs {

    @Field(() => PostCategoryUpdateInput, {nullable:false})
    @Type(() => PostCategoryUpdateInput)
    data!: PostCategoryUpdateInput;

    @Field(() => PostCategoryWhereUniqueInput, {nullable:false})
    @Type(() => PostCategoryWhereUniqueInput)
    where!: PostCategoryWhereUniqueInput;
}
