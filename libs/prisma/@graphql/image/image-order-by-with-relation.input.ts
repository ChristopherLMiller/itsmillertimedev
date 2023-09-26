import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PostOrderByRelationAggregateInput } from '../post/post-order-by-relation-aggregate.input';
import { PageOrderByRelationAggregateInput } from '../page/page-order-by-relation-aggregate.input';
import { ModelOrderByWithRelationInput } from '../model/model-order-by-with-relation.input';

@InputType()
export class ImageOrderByWithRelationInput {

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

    @Field(() => PostOrderByRelationAggregateInput, {nullable:true})
    Post?: PostOrderByRelationAggregateInput;

    @Field(() => PageOrderByRelationAggregateInput, {nullable:true})
    Page?: PageOrderByRelationAggregateInput;

    @Field(() => ModelOrderByWithRelationInput, {nullable:true})
    Model?: ModelOrderByWithRelationInput;
}
