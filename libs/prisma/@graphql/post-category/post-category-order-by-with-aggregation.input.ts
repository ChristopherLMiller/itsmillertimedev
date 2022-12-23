import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PostCategoryCountOrderByAggregateInput } from './post-category-count-order-by-aggregate.input';
import { PostCategoryAvgOrderByAggregateInput } from './post-category-avg-order-by-aggregate.input';
import { PostCategoryMaxOrderByAggregateInput } from './post-category-max-order-by-aggregate.input';
import { PostCategoryMinOrderByAggregateInput } from './post-category-min-order-by-aggregate.input';
import { PostCategorySumOrderByAggregateInput } from './post-category-sum-order-by-aggregate.input';

@InputType()
export class PostCategoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => PostCategoryCountOrderByAggregateInput, {nullable:true})
    _count?: PostCategoryCountOrderByAggregateInput;

    @Field(() => PostCategoryAvgOrderByAggregateInput, {nullable:true})
    _avg?: PostCategoryAvgOrderByAggregateInput;

    @Field(() => PostCategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: PostCategoryMaxOrderByAggregateInput;

    @Field(() => PostCategoryMinOrderByAggregateInput, {nullable:true})
    _min?: PostCategoryMinOrderByAggregateInput;

    @Field(() => PostCategorySumOrderByAggregateInput, {nullable:true})
    _sum?: PostCategorySumOrderByAggregateInput;
}
