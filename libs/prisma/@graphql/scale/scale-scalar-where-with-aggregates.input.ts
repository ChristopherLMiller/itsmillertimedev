import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ScaleScalarWhereWithAggregatesInput {

    @Field(() => [ScaleScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ScaleScalarWhereWithAggregatesInput>;

    @Field(() => [ScaleScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ScaleScalarWhereWithAggregatesInput>;

    @Field(() => [ScaleScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ScaleScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    slug?: StringWithAggregatesFilter;
}
