import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ManufacturerScalarWhereWithAggregatesInput {

    @Field(() => [ManufacturerScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ManufacturerScalarWhereWithAggregatesInput>;

    @Field(() => [ManufacturerScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ManufacturerScalarWhereWithAggregatesInput>;

    @Field(() => [ManufacturerScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ManufacturerScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    slug?: StringWithAggregatesFilter;
}
