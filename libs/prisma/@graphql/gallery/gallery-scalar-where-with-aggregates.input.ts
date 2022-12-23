import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumVisibilityWithAggregatesFilter } from '../prisma/enum-visibility-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class GalleryScalarWhereWithAggregatesInput {

    @Field(() => [GalleryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<GalleryScalarWhereWithAggregatesInput>;

    @Field(() => [GalleryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<GalleryScalarWhereWithAggregatesInput>;

    @Field(() => [GalleryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<GalleryScalarWhereWithAggregatesInput>;

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

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    meta?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => EnumVisibilityWithAggregatesFilter, {nullable:true})
    visibility?: EnumVisibilityWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isNsfw?: BoolWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    image?: StringWithAggregatesFilter;
}
