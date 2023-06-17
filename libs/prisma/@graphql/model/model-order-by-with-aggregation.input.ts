import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ModelCountOrderByAggregateInput } from './model-count-order-by-aggregate.input';
import { ModelAvgOrderByAggregateInput } from './model-avg-order-by-aggregate.input';
import { ModelMaxOrderByAggregateInput } from './model-max-order-by-aggregate.input';
import { ModelMinOrderByAggregateInput } from './model-min-order-by-aggregate.input';
import { ModelSumOrderByAggregateInput } from './model-sum-order-by-aggregate.input';

@InputType()
export class ModelOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    completed?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    visibility?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    metaTitle?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    summary?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    featuredImage?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    clockifyProjectId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contents?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    yearReleased?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    completedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    imagePublic_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    manufacturerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    scaleId?: keyof typeof SortOrder;

    @Field(() => ModelCountOrderByAggregateInput, {nullable:true})
    _count?: ModelCountOrderByAggregateInput;

    @Field(() => ModelAvgOrderByAggregateInput, {nullable:true})
    _avg?: ModelAvgOrderByAggregateInput;

    @Field(() => ModelMaxOrderByAggregateInput, {nullable:true})
    _max?: ModelMaxOrderByAggregateInput;

    @Field(() => ModelMinOrderByAggregateInput, {nullable:true})
    _min?: ModelMinOrderByAggregateInput;

    @Field(() => ModelSumOrderByAggregateInput, {nullable:true})
    _sum?: ModelSumOrderByAggregateInput;
}
