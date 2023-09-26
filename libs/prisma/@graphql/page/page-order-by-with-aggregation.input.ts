import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PageCountOrderByAggregateInput } from './page-count-order-by-aggregate.input';
import { PageAvgOrderByAggregateInput } from './page-avg-order-by-aggregate.input';
import { PageMaxOrderByAggregateInput } from './page-max-order-by-aggregate.input';
import { PageMinOrderByAggregateInput } from './page-min-order-by-aggregate.input';
import { PageSumOrderByAggregateInput } from './page-sum-order-by-aggregate.input';

@InputType()
export class PageOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    summary?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    content?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    imagePublic_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    isPublic?: keyof typeof SortOrder;

    @Field(() => PageCountOrderByAggregateInput, {nullable:true})
    _count?: PageCountOrderByAggregateInput;

    @Field(() => PageAvgOrderByAggregateInput, {nullable:true})
    _avg?: PageAvgOrderByAggregateInput;

    @Field(() => PageMaxOrderByAggregateInput, {nullable:true})
    _max?: PageMaxOrderByAggregateInput;

    @Field(() => PageMinOrderByAggregateInput, {nullable:true})
    _min?: PageMinOrderByAggregateInput;

    @Field(() => PageSumOrderByAggregateInput, {nullable:true})
    _sum?: PageSumOrderByAggregateInput;
}
