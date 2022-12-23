import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GalleryCountOrderByAggregateInput } from './gallery-count-order-by-aggregate.input';
import { GalleryAvgOrderByAggregateInput } from './gallery-avg-order-by-aggregate.input';
import { GalleryMaxOrderByAggregateInput } from './gallery-max-order-by-aggregate.input';
import { GalleryMinOrderByAggregateInput } from './gallery-min-order-by-aggregate.input';
import { GallerySumOrderByAggregateInput } from './gallery-sum-order-by-aggregate.input';

@InputType()
export class GalleryOrderByWithAggregationInput {

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
    meta?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    visibility?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isNsfw?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    image?: keyof typeof SortOrder;

    @Field(() => GalleryCountOrderByAggregateInput, {nullable:true})
    _count?: GalleryCountOrderByAggregateInput;

    @Field(() => GalleryAvgOrderByAggregateInput, {nullable:true})
    _avg?: GalleryAvgOrderByAggregateInput;

    @Field(() => GalleryMaxOrderByAggregateInput, {nullable:true})
    _max?: GalleryMaxOrderByAggregateInput;

    @Field(() => GalleryMinOrderByAggregateInput, {nullable:true})
    _min?: GalleryMinOrderByAggregateInput;

    @Field(() => GallerySumOrderByAggregateInput, {nullable:true})
    _sum?: GallerySumOrderByAggregateInput;
}
