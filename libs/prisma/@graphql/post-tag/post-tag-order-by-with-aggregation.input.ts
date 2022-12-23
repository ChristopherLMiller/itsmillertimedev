import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PostTagCountOrderByAggregateInput } from './post-tag-count-order-by-aggregate.input';
import { PostTagAvgOrderByAggregateInput } from './post-tag-avg-order-by-aggregate.input';
import { PostTagMaxOrderByAggregateInput } from './post-tag-max-order-by-aggregate.input';
import { PostTagMinOrderByAggregateInput } from './post-tag-min-order-by-aggregate.input';
import { PostTagSumOrderByAggregateInput } from './post-tag-sum-order-by-aggregate.input';

@InputType()
export class PostTagOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    postId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => PostTagCountOrderByAggregateInput, {nullable:true})
    _count?: PostTagCountOrderByAggregateInput;

    @Field(() => PostTagAvgOrderByAggregateInput, {nullable:true})
    _avg?: PostTagAvgOrderByAggregateInput;

    @Field(() => PostTagMaxOrderByAggregateInput, {nullable:true})
    _max?: PostTagMaxOrderByAggregateInput;

    @Field(() => PostTagMinOrderByAggregateInput, {nullable:true})
    _min?: PostTagMinOrderByAggregateInput;

    @Field(() => PostTagSumOrderByAggregateInput, {nullable:true})
    _sum?: PostTagSumOrderByAggregateInput;
}
