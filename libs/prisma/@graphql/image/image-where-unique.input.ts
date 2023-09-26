import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageWhereInput } from './image-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { PostListRelationFilter } from '../post/post-list-relation-filter.input';
import { PageListRelationFilter } from '../page/page-list-relation-filter.input';
import { ModelNullableRelationFilter } from '../model/model-nullable-relation-filter.input';

@InputType()
export class ImageWhereUniqueInput {

    @Field(() => String, {nullable:true})
    public_id?: string;

    @Field(() => [ImageWhereInput], {nullable:true})
    AND?: Array<ImageWhereInput>;

    @Field(() => [ImageWhereInput], {nullable:true})
    OR?: Array<ImageWhereInput>;

    @Field(() => [ImageWhereInput], {nullable:true})
    NOT?: Array<ImageWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    version?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    format?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    url?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    secureUrl?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    alt?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    caption?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    width?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    height?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    bytes?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    thumbnail?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    exif?: JsonNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    modelId?: IntNullableFilter;

    @Field(() => PostListRelationFilter, {nullable:true})
    Post?: PostListRelationFilter;

    @Field(() => PageListRelationFilter, {nullable:true})
    Page?: PageListRelationFilter;

    @Field(() => ModelNullableRelationFilter, {nullable:true})
    Model?: ModelNullableRelationFilter;
}
