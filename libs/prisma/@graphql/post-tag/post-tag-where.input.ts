import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { PostListRelationFilter } from '../post/post-list-relation-filter.input';

@InputType()
export class PostTagWhereInput {

    @Field(() => [PostTagWhereInput], {nullable:true})
    AND?: Array<PostTagWhereInput>;

    @Field(() => [PostTagWhereInput], {nullable:true})
    OR?: Array<PostTagWhereInput>;

    @Field(() => [PostTagWhereInput], {nullable:true})
    NOT?: Array<PostTagWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    postId?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => PostListRelationFilter, {nullable:true})
    posts?: PostListRelationFilter;
}
