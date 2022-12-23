import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumPublicationStatusFilter } from '../prisma/enum-publication-status-filter.input';
import { EnumVisibilityNullableFilter } from '../prisma/enum-visibility-nullable-filter.input';

@InputType()
export class GalleryImageScalarWhereInput {

    @Field(() => [GalleryImageScalarWhereInput], {nullable:true})
    AND?: Array<GalleryImageScalarWhereInput>;

    @Field(() => [GalleryImageScalarWhereInput], {nullable:true})
    OR?: Array<GalleryImageScalarWhereInput>;

    @Field(() => [GalleryImageScalarWhereInput], {nullable:true})
    NOT?: Array<GalleryImageScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => EnumPublicationStatusFilter, {nullable:true})
    published?: EnumPublicationStatusFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    publishedAt?: DateTimeFilter;

    @Field(() => EnumVisibilityNullableFilter, {nullable:true})
    visibility?: EnumVisibilityNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;
}
