import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PostWhereInput } from './post-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { ImageNullableRelationFilter } from '../image/image-nullable-relation-filter.input';
import { PostCategoryRelationFilter } from '../post-category/post-category-relation-filter.input';
import { PostTagListRelationFilter } from '../post-tag/post-tag-list-relation-filter.input';

@InputType()
export class PostWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => [PostWhereInput], {nullable:true})
    AND?: Array<PostWhereInput>;

    @Field(() => [PostWhereInput], {nullable:true})
    OR?: Array<PostWhereInput>;

    @Field(() => [PostWhereInput], {nullable:true})
    NOT?: Array<PostWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    metaTitle?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    summary?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    wordCount?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    published?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    publishedAt?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    imagePublic_id?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    postCategoryId?: IntFilter;

    @Field(() => ImageNullableRelationFilter, {nullable:true})
    featuredImage?: ImageNullableRelationFilter;

    @Field(() => PostCategoryRelationFilter, {nullable:true})
    category?: PostCategoryRelationFilter;

    @Field(() => PostTagListRelationFilter, {nullable:true})
    tags?: PostTagListRelationFilter;
}
