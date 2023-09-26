import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ImageCountOrderByAggregateInput } from './image-count-order-by-aggregate.input';
import { ImageAvgOrderByAggregateInput } from './image-avg-order-by-aggregate.input';
import { ImageMaxOrderByAggregateInput } from './image-max-order-by-aggregate.input';
import { ImageMinOrderByAggregateInput } from './image-min-order-by-aggregate.input';
import { ImageSumOrderByAggregateInput } from './image-sum-order-by-aggregate.input';

@InputType()
export class ImageOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    public_id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    version?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    format?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    url?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    secureUrl?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    alt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    caption?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    width?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    height?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    bytes?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    thumbnail?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    exif?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    modelId?: SortOrderInput;

    @Field(() => ImageCountOrderByAggregateInput, {nullable:true})
    _count?: ImageCountOrderByAggregateInput;

    @Field(() => ImageAvgOrderByAggregateInput, {nullable:true})
    _avg?: ImageAvgOrderByAggregateInput;

    @Field(() => ImageMaxOrderByAggregateInput, {nullable:true})
    _max?: ImageMaxOrderByAggregateInput;

    @Field(() => ImageMinOrderByAggregateInput, {nullable:true})
    _min?: ImageMinOrderByAggregateInput;

    @Field(() => ImageSumOrderByAggregateInput, {nullable:true})
    _sum?: ImageSumOrderByAggregateInput;
}
