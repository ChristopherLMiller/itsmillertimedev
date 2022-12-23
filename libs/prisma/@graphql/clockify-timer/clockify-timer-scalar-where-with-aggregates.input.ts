import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class ClockifyTimerScalarWhereWithAggregatesInput {

    @Field(() => [ClockifyTimerScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ClockifyTimerScalarWhereWithAggregatesInput>;

    @Field(() => [ClockifyTimerScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ClockifyTimerScalarWhereWithAggregatesInput>;

    @Field(() => [ClockifyTimerScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ClockifyTimerScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    projectId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    startTime?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;
}
