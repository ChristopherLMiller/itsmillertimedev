import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { GalleryImageCountOrderByAggregateInput } from './gallery-image-count-order-by-aggregate.input';
import { GalleryImageAvgOrderByAggregateInput } from './gallery-image-avg-order-by-aggregate.input';
import { GalleryImageMaxOrderByAggregateInput } from './gallery-image-max-order-by-aggregate.input';
import { GalleryImageMinOrderByAggregateInput } from './gallery-image-min-order-by-aggregate.input';
import { GalleryImageSumOrderByAggregateInput } from './gallery-image-sum-order-by-aggregate.input';

@InputType()
export class GalleryImageOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    published?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    publishedAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    visibility?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    url?: keyof typeof SortOrder;

    @Field(() => GalleryImageCountOrderByAggregateInput, {nullable:true})
    _count?: GalleryImageCountOrderByAggregateInput;

    @Field(() => GalleryImageAvgOrderByAggregateInput, {nullable:true})
    _avg?: GalleryImageAvgOrderByAggregateInput;

    @Field(() => GalleryImageMaxOrderByAggregateInput, {nullable:true})
    _max?: GalleryImageMaxOrderByAggregateInput;

    @Field(() => GalleryImageMinOrderByAggregateInput, {nullable:true})
    _min?: GalleryImageMinOrderByAggregateInput;

    @Field(() => GalleryImageSumOrderByAggregateInput, {nullable:true})
    _sum?: GalleryImageSumOrderByAggregateInput;
}
