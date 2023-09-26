import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { GalleryOrderByWithRelationInput } from '../gallery/gallery-order-by-with-relation.input';

@InputType()
export class GalleryTagOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    galleryId?: SortOrderInput;

    @Field(() => GalleryOrderByWithRelationInput, {nullable:true})
    Gallery?: GalleryOrderByWithRelationInput;
}
