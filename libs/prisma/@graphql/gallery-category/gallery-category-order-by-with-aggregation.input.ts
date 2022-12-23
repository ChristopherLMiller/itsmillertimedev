import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GalleryCategoryCountOrderByAggregateInput } from './gallery-category-count-order-by-aggregate.input';
import { GalleryCategoryAvgOrderByAggregateInput } from './gallery-category-avg-order-by-aggregate.input';
import { GalleryCategoryMaxOrderByAggregateInput } from './gallery-category-max-order-by-aggregate.input';
import { GalleryCategoryMinOrderByAggregateInput } from './gallery-category-min-order-by-aggregate.input';
import { GalleryCategorySumOrderByAggregateInput } from './gallery-category-sum-order-by-aggregate.input';

@InputType()
export class GalleryCategoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    galleryId?: keyof typeof SortOrder;

    @Field(() => GalleryCategoryCountOrderByAggregateInput, {nullable:true})
    _count?: GalleryCategoryCountOrderByAggregateInput;

    @Field(() => GalleryCategoryAvgOrderByAggregateInput, {nullable:true})
    _avg?: GalleryCategoryAvgOrderByAggregateInput;

    @Field(() => GalleryCategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: GalleryCategoryMaxOrderByAggregateInput;

    @Field(() => GalleryCategoryMinOrderByAggregateInput, {nullable:true})
    _min?: GalleryCategoryMinOrderByAggregateInput;

    @Field(() => GalleryCategorySumOrderByAggregateInput, {nullable:true})
    _sum?: GalleryCategorySumOrderByAggregateInput;
}
