import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GalleryOrderByWithRelationInput } from '../gallery/gallery-order-by-with-relation.input';

@InputType()
export class GalleryCategoryOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    galleryId?: keyof typeof SortOrder;

    @Field(() => GalleryOrderByWithRelationInput, {nullable:true})
    Gallery?: GalleryOrderByWithRelationInput;
}
