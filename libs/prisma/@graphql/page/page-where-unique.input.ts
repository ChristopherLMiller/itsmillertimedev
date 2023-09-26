import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PageWhereInput } from './page-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { ImageNullableRelationFilter } from '../image/image-nullable-relation-filter.input';

@InputType()
export class PageWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => [PageWhereInput], {nullable:true})
    AND?: Array<PageWhereInput>;

    @Field(() => [PageWhereInput], {nullable:true})
    OR?: Array<PageWhereInput>;

    @Field(() => [PageWhereInput], {nullable:true})
    NOT?: Array<PageWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    summary?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    content?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    imagePublic_id?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isPublic?: BoolFilter;

    @Field(() => ImageNullableRelationFilter, {nullable:true})
    featuredImage?: ImageNullableRelationFilter;
}
