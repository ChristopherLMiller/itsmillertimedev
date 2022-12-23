import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GalleryCategoryOrderByRelationAggregateInput } from '../gallery-category/gallery-category-order-by-relation-aggregate.input';
import { GalleryTagOrderByRelationAggregateInput } from '../gallery-tag/gallery-tag-order-by-relation-aggregate.input';
import { GalleryImageOrderByRelationAggregateInput } from '../gallery-image/gallery-image-order-by-relation-aggregate.input';

@InputType()
export class GalleryOrderByWithRelationInput {

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

    @Field(() => GalleryCategoryOrderByRelationAggregateInput, {nullable:true})
    categories?: GalleryCategoryOrderByRelationAggregateInput;

    @Field(() => GalleryTagOrderByRelationAggregateInput, {nullable:true})
    tags?: GalleryTagOrderByRelationAggregateInput;

    @Field(() => GalleryImageOrderByRelationAggregateInput, {nullable:true})
    images?: GalleryImageOrderByRelationAggregateInput;
}
