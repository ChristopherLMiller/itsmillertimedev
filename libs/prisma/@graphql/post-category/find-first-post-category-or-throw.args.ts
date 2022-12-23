import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostCategoryWhereInput } from './post-category-where.input';
import { Type } from 'class-transformer';
import { PostCategoryOrderByWithRelationInput } from './post-category-order-by-with-relation.input';
import { PostCategoryWhereUniqueInput } from './post-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PostCategoryScalarFieldEnum } from './post-category-scalar-field.enum';

@ArgsType()
export class FindFirstPostCategoryOrThrowArgs {

    @Field(() => PostCategoryWhereInput, {nullable:true})
    @Type(() => PostCategoryWhereInput)
    where?: PostCategoryWhereInput;

    @Field(() => [PostCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PostCategoryOrderByWithRelationInput>;

    @Field(() => PostCategoryWhereUniqueInput, {nullable:true})
    cursor?: PostCategoryWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PostCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PostCategoryScalarFieldEnum>;
}
