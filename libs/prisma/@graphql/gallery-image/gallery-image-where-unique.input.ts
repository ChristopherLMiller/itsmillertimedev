import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GalleryImageWhereInput } from './gallery-image-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumPublicationStatusFilter } from '../prisma/enum-publication-status-filter.input';
import { EnumVisibilityNullableFilter } from '../prisma/enum-visibility-nullable-filter.input';
import { GalleryListRelationFilter } from '../gallery/gallery-list-relation-filter.input';

@InputType()
export class GalleryImageWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => [GalleryImageWhereInput], {nullable:true})
    AND?: Array<GalleryImageWhereInput>;

    @Field(() => [GalleryImageWhereInput], {nullable:true})
    OR?: Array<GalleryImageWhereInput>;

    @Field(() => [GalleryImageWhereInput], {nullable:true})
    NOT?: Array<GalleryImageWhereInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => EnumPublicationStatusFilter, {nullable:true})
    published?: EnumPublicationStatusFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    publishedAt?: DateTimeFilter;

    @Field(() => EnumVisibilityNullableFilter, {nullable:true})
    visibility?: EnumVisibilityNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;

    @Field(() => GalleryListRelationFilter, {nullable:true})
    galleries?: GalleryListRelationFilter;
}
