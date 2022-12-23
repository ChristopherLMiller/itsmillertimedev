import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class MarkerScalarWhereWithAggregatesInput {

    @Field(() => [MarkerScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => MarkerScalarWhereWithAggregatesInput)
    AND?: Array<MarkerScalarWhereWithAggregatesInput>;

    @Field(() => [MarkerScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => MarkerScalarWhereWithAggregatesInput)
    OR?: Array<MarkerScalarWhereWithAggregatesInput>;

    @Field(() => [MarkerScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => MarkerScalarWhereWithAggregatesInput)
    NOT?: Array<MarkerScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    lat?: DecimalWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    lon?: DecimalWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    siteURL?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    galleryURL?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    rating?: IntWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    visited?: BoolWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    visits?: IntWithAggregatesFilter;
}
