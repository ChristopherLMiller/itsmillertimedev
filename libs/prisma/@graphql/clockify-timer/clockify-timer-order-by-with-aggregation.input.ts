import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ClockifyTimerCountOrderByAggregateInput } from './clockify-timer-count-order-by-aggregate.input';
import { ClockifyTimerAvgOrderByAggregateInput } from './clockify-timer-avg-order-by-aggregate.input';
import { ClockifyTimerMaxOrderByAggregateInput } from './clockify-timer-max-order-by-aggregate.input';
import { ClockifyTimerMinOrderByAggregateInput } from './clockify-timer-min-order-by-aggregate.input';
import { ClockifyTimerSumOrderByAggregateInput } from './clockify-timer-sum-order-by-aggregate.input';

@InputType()
export class ClockifyTimerOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    projectId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    startTime?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => ClockifyTimerCountOrderByAggregateInput, {nullable:true})
    _count?: ClockifyTimerCountOrderByAggregateInput;

    @Field(() => ClockifyTimerAvgOrderByAggregateInput, {nullable:true})
    _avg?: ClockifyTimerAvgOrderByAggregateInput;

    @Field(() => ClockifyTimerMaxOrderByAggregateInput, {nullable:true})
    _max?: ClockifyTimerMaxOrderByAggregateInput;

    @Field(() => ClockifyTimerMinOrderByAggregateInput, {nullable:true})
    _min?: ClockifyTimerMinOrderByAggregateInput;

    @Field(() => ClockifyTimerSumOrderByAggregateInput, {nullable:true})
    _sum?: ClockifyTimerSumOrderByAggregateInput;
}
