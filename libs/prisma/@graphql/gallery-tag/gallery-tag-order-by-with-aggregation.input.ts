import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GalleryTagCountOrderByAggregateInput } from './gallery-tag-count-order-by-aggregate.input';
import { GalleryTagAvgOrderByAggregateInput } from './gallery-tag-avg-order-by-aggregate.input';
import { GalleryTagMaxOrderByAggregateInput } from './gallery-tag-max-order-by-aggregate.input';
import { GalleryTagMinOrderByAggregateInput } from './gallery-tag-min-order-by-aggregate.input';
import { GalleryTagSumOrderByAggregateInput } from './gallery-tag-sum-order-by-aggregate.input';

@InputType()
export class GalleryTagOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    galleryId?: keyof typeof SortOrder;

    @Field(() => GalleryTagCountOrderByAggregateInput, {nullable:true})
    _count?: GalleryTagCountOrderByAggregateInput;

    @Field(() => GalleryTagAvgOrderByAggregateInput, {nullable:true})
    _avg?: GalleryTagAvgOrderByAggregateInput;

    @Field(() => GalleryTagMaxOrderByAggregateInput, {nullable:true})
    _max?: GalleryTagMaxOrderByAggregateInput;

    @Field(() => GalleryTagMinOrderByAggregateInput, {nullable:true})
    _min?: GalleryTagMinOrderByAggregateInput;

    @Field(() => GalleryTagSumOrderByAggregateInput, {nullable:true})
    _sum?: GalleryTagSumOrderByAggregateInput;
}
