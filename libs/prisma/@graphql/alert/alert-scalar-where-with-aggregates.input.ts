import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class AlertScalarWhereWithAggregatesInput {

    @Field(() => [AlertScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AlertScalarWhereWithAggregatesInput>;

    @Field(() => [AlertScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AlertScalarWhereWithAggregatesInput>;

    @Field(() => [AlertScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AlertScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    active?: BoolWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    validUntil?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    startDate?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    AlertAttempts?: IntWithAggregatesFilter;
}
