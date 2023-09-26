import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PostTagWhereInput } from './post-tag-where.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { PostListRelationFilter } from '../post/post-list-relation-filter.input';

@InputType()
export class PostTagWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => [PostTagWhereInput], {nullable:true})
    AND?: Array<PostTagWhereInput>;

    @Field(() => [PostTagWhereInput], {nullable:true})
    OR?: Array<PostTagWhereInput>;

    @Field(() => [PostTagWhereInput], {nullable:true})
    NOT?: Array<PostTagWhereInput>;

    @Field(() => IntNullableFilter, {nullable:true})
    postId?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => PostListRelationFilter, {nullable:true})
    posts?: PostListRelationFilter;
}
