import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ManufacturerCountOrderByAggregateInput } from './manufacturer-count-order-by-aggregate.input';
import { ManufacturerAvgOrderByAggregateInput } from './manufacturer-avg-order-by-aggregate.input';
import { ManufacturerMaxOrderByAggregateInput } from './manufacturer-max-order-by-aggregate.input';
import { ManufacturerMinOrderByAggregateInput } from './manufacturer-min-order-by-aggregate.input';
import { ManufacturerSumOrderByAggregateInput } from './manufacturer-sum-order-by-aggregate.input';

@InputType()
export class ManufacturerOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => ManufacturerCountOrderByAggregateInput, {nullable:true})
    _count?: ManufacturerCountOrderByAggregateInput;

    @Field(() => ManufacturerAvgOrderByAggregateInput, {nullable:true})
    _avg?: ManufacturerAvgOrderByAggregateInput;

    @Field(() => ManufacturerMaxOrderByAggregateInput, {nullable:true})
    _max?: ManufacturerMaxOrderByAggregateInput;

    @Field(() => ManufacturerMinOrderByAggregateInput, {nullable:true})
    _min?: ManufacturerMinOrderByAggregateInput;

    @Field(() => ManufacturerSumOrderByAggregateInput, {nullable:true})
    _sum?: ManufacturerSumOrderByAggregateInput;
}
