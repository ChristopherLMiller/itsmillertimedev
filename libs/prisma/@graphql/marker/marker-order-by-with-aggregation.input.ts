import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { MarkerCountOrderByAggregateInput } from './marker-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { MarkerAvgOrderByAggregateInput } from './marker-avg-order-by-aggregate.input';
import { MarkerMaxOrderByAggregateInput } from './marker-max-order-by-aggregate.input';
import { MarkerMinOrderByAggregateInput } from './marker-min-order-by-aggregate.input';
import { MarkerSumOrderByAggregateInput } from './marker-sum-order-by-aggregate.input';

@InputType()
export class MarkerOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lat?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lon?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    siteURL?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    galleryURL?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rating?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    visited?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    visits?: keyof typeof SortOrder;

    @Field(() => MarkerCountOrderByAggregateInput, {nullable:true})
    @Type(() => MarkerCountOrderByAggregateInput)
    _count?: MarkerCountOrderByAggregateInput;

    @Field(() => MarkerAvgOrderByAggregateInput, {nullable:true})
    @Type(() => MarkerAvgOrderByAggregateInput)
    _avg?: MarkerAvgOrderByAggregateInput;

    @Field(() => MarkerMaxOrderByAggregateInput, {nullable:true})
    @Type(() => MarkerMaxOrderByAggregateInput)
    _max?: MarkerMaxOrderByAggregateInput;

    @Field(() => MarkerMinOrderByAggregateInput, {nullable:true})
    @Type(() => MarkerMinOrderByAggregateInput)
    _min?: MarkerMinOrderByAggregateInput;

    @Field(() => MarkerSumOrderByAggregateInput, {nullable:true})
    @Type(() => MarkerSumOrderByAggregateInput)
    _sum?: MarkerSumOrderByAggregateInput;
}
