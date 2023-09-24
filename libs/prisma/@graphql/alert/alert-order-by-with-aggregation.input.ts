import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AlertCountOrderByAggregateInput } from './alert-count-order-by-aggregate.input';
import { AlertAvgOrderByAggregateInput } from './alert-avg-order-by-aggregate.input';
import { AlertMaxOrderByAggregateInput } from './alert-max-order-by-aggregate.input';
import { AlertMinOrderByAggregateInput } from './alert-min-order-by-aggregate.input';
import { AlertSumOrderByAggregateInput } from './alert-sum-order-by-aggregate.input';

@InputType()
export class AlertOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    active?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    validUntil?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    startDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    AlertAttempts?: keyof typeof SortOrder;

    @Field(() => AlertCountOrderByAggregateInput, {nullable:true})
    _count?: AlertCountOrderByAggregateInput;

    @Field(() => AlertAvgOrderByAggregateInput, {nullable:true})
    _avg?: AlertAvgOrderByAggregateInput;

    @Field(() => AlertMaxOrderByAggregateInput, {nullable:true})
    _max?: AlertMaxOrderByAggregateInput;

    @Field(() => AlertMinOrderByAggregateInput, {nullable:true})
    _min?: AlertMinOrderByAggregateInput;

    @Field(() => AlertSumOrderByAggregateInput, {nullable:true})
    _sum?: AlertSumOrderByAggregateInput;
}
