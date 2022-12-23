import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Visibility } from '../prisma/visibility.enum';
import { GalleryCategoryCreateNestedManyWithoutGalleryInput } from '../gallery-category/gallery-category-create-nested-many-without-gallery.input';
import { GalleryTagCreateNestedManyWithoutGalleryInput } from '../gallery-tag/gallery-tag-create-nested-many-without-gallery.input';
import { GalleryImageCreateNestedManyWithoutGalleriesInput } from '../gallery-image/gallery-image-create-nested-many-without-galleries.input';

@InputType()
export class GalleryCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    meta!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Visibility, {nullable:true})
    visibility?: keyof typeof Visibility;

    @Field(() => Boolean, {nullable:true})
    isNsfw?: boolean;

    @Field(() => String, {nullable:false})
    image!: string;

    @Field(() => GalleryCategoryCreateNestedManyWithoutGalleryInput, {nullable:true})
    categories?: GalleryCategoryCreateNestedManyWithoutGalleryInput;

    @Field(() => GalleryTagCreateNestedManyWithoutGalleryInput, {nullable:true})
    tags?: GalleryTagCreateNestedManyWithoutGalleryInput;

    @Field(() => GalleryImageCreateNestedManyWithoutGalleriesInput, {nullable:true})
    images?: GalleryImageCreateNestedManyWithoutGalleriesInput;
}
