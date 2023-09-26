import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { GalleryOrderByRelationAggregateInput } from '../gallery/gallery-order-by-relation-aggregate.input';

@InputType()
export class GalleryImageOrderByWithRelationInput {

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

    @Field(() => GalleryOrderByRelationAggregateInput, {nullable:true})
    galleries?: GalleryOrderByRelationAggregateInput;
}
