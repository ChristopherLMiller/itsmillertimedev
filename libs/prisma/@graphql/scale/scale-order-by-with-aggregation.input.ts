import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ScaleCountOrderByAggregateInput } from './scale-count-order-by-aggregate.input';
import { ScaleAvgOrderByAggregateInput } from './scale-avg-order-by-aggregate.input';
import { ScaleMaxOrderByAggregateInput } from './scale-max-order-by-aggregate.input';
import { ScaleMinOrderByAggregateInput } from './scale-min-order-by-aggregate.input';
import { ScaleSumOrderByAggregateInput } from './scale-sum-order-by-aggregate.input';

@InputType()
export class ScaleOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => ScaleCountOrderByAggregateInput, {nullable:true})
    _count?: ScaleCountOrderByAggregateInput;

    @Field(() => ScaleAvgOrderByAggregateInput, {nullable:true})
    _avg?: ScaleAvgOrderByAggregateInput;

    @Field(() => ScaleMaxOrderByAggregateInput, {nullable:true})
    _max?: ScaleMaxOrderByAggregateInput;

    @Field(() => ScaleMinOrderByAggregateInput, {nullable:true})
    _min?: ScaleMinOrderByAggregateInput;

    @Field(() => ScaleSumOrderByAggregateInput, {nullable:true})
    _sum?: ScaleSumOrderByAggregateInput;
}
