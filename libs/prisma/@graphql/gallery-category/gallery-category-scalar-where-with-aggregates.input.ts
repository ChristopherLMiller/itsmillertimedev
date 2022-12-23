import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class GalleryCategoryScalarWhereWithAggregatesInput {

    @Field(() => [GalleryCategoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<GalleryCategoryScalarWhereWithAggregatesInput>;

    @Field(() => [GalleryCategoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<GalleryCategoryScalarWhereWithAggregatesInput>;

    @Field(() => [GalleryCategoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<GalleryCategoryScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    slug?: StringWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    galleryId?: IntNullableWithAggregatesFilter;
}
