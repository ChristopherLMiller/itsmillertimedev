import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumPublicationStatusWithAggregatesFilter } from '../prisma/enum-publication-status-with-aggregates-filter.input';
import { EnumVisibilityNullableWithAggregatesFilter } from '../prisma/enum-visibility-nullable-with-aggregates-filter.input';

@InputType()
export class GalleryImageScalarWhereWithAggregatesInput {

    @Field(() => [GalleryImageScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<GalleryImageScalarWhereWithAggregatesInput>;

    @Field(() => [GalleryImageScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<GalleryImageScalarWhereWithAggregatesInput>;

    @Field(() => [GalleryImageScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<GalleryImageScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    slug?: StringWithAggregatesFilter;

    @Field(() => EnumPublicationStatusWithAggregatesFilter, {nullable:true})
    published?: EnumPublicationStatusWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    publishedAt?: DateTimeWithAggregatesFilter;

    @Field(() => EnumVisibilityNullableWithAggregatesFilter, {nullable:true})
    visibility?: EnumVisibilityNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    url?: StringWithAggregatesFilter;
}
