import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PostCategoryWhereInput } from './post-category-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { PostListRelationFilter } from '../post/post-list-relation-filter.input';

@InputType()
export class PostCategoryWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => [PostCategoryWhereInput], {nullable:true})
    AND?: Array<PostCategoryWhereInput>;

    @Field(() => [PostCategoryWhereInput], {nullable:true})
    OR?: Array<PostCategoryWhereInput>;

    @Field(() => [PostCategoryWhereInput], {nullable:true})
    NOT?: Array<PostCategoryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => PostListRelationFilter, {nullable:true})
    posts?: PostListRelationFilter;
}
