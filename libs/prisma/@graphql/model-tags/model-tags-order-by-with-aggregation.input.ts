import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ModelTagsCountOrderByAggregateInput } from './model-tags-count-order-by-aggregate.input';
import { ModelTagsAvgOrderByAggregateInput } from './model-tags-avg-order-by-aggregate.input';
import { ModelTagsMaxOrderByAggregateInput } from './model-tags-max-order-by-aggregate.input';
import { ModelTagsMinOrderByAggregateInput } from './model-tags-min-order-by-aggregate.input';
import { ModelTagsSumOrderByAggregateInput } from './model-tags-sum-order-by-aggregate.input';

@InputType()
export class ModelTagsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    modelId?: SortOrderInput;

    @Field(() => ModelTagsCountOrderByAggregateInput, {nullable:true})
    _count?: ModelTagsCountOrderByAggregateInput;

    @Field(() => ModelTagsAvgOrderByAggregateInput, {nullable:true})
    _avg?: ModelTagsAvgOrderByAggregateInput;

    @Field(() => ModelTagsMaxOrderByAggregateInput, {nullable:true})
    _max?: ModelTagsMaxOrderByAggregateInput;

    @Field(() => ModelTagsMinOrderByAggregateInput, {nullable:true})
    _min?: ModelTagsMinOrderByAggregateInput;

    @Field(() => ModelTagsSumOrderByAggregateInput, {nullable:true})
    _sum?: ModelTagsSumOrderByAggregateInput;
}
