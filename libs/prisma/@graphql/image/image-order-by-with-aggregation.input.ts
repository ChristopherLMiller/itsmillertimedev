import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
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

    @Field(() => SortOrder, {nullable:true})
    version?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    format?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    url?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    secureUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    alt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    caption?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    width?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    height?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bytes?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    thumbnail?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    exif?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

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
