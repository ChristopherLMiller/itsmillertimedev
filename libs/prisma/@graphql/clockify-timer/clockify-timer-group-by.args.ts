import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClockifyTimerWhereInput } from './clockify-timer-where.input';
import { Type } from 'class-transformer';
import { ClockifyTimerOrderByWithAggregationInput } from './clockify-timer-order-by-with-aggregation.input';
import { ClockifyTimerScalarFieldEnum } from './clockify-timer-scalar-field.enum';
import { ClockifyTimerScalarWhereWithAggregatesInput } from './clockify-timer-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ClockifyTimerCountAggregateInput } from './clockify-timer-count-aggregate.input';
import { ClockifyTimerAvgAggregateInput } from './clockify-timer-avg-aggregate.input';
import { ClockifyTimerSumAggregateInput } from './clockify-timer-sum-aggregate.input';
import { ClockifyTimerMinAggregateInput } from './clockify-timer-min-aggregate.input';
import { ClockifyTimerMaxAggregateInput } from './clockify-timer-max-aggregate.input';

@ArgsType()
export class ClockifyTimerGroupByArgs {

    @Field(() => ClockifyTimerWhereInput, {nullable:true})
    @Type(() => ClockifyTimerWhereInput)
    where?: ClockifyTimerWhereInput;

    @Field(() => [ClockifyTimerOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ClockifyTimerOrderByWithAggregationInput>;

    @Field(() => [ClockifyTimerScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ClockifyTimerScalarFieldEnum>;

    @Field(() => ClockifyTimerScalarWhereWithAggregatesInput, {nullable:true})
    having?: ClockifyTimerScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ClockifyTimerCountAggregateInput, {nullable:true})
    _count?: ClockifyTimerCountAggregateInput;

    @Field(() => ClockifyTimerAvgAggregateInput, {nullable:true})
    _avg?: ClockifyTimerAvgAggregateInput;

    @Field(() => ClockifyTimerSumAggregateInput, {nullable:true})
    _sum?: ClockifyTimerSumAggregateInput;

    @Field(() => ClockifyTimerMinAggregateInput, {nullable:true})
    _min?: ClockifyTimerMinAggregateInput;

    @Field(() => ClockifyTimerMaxAggregateInput, {nullable:true})
    _max?: ClockifyTimerMaxAggregateInput;
}
