import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Visibility } from '../prisma/visibility.enum';
import { GalleryTagCreateNestedManyWithoutGalleryInput } from '../gallery-tag/gallery-tag-create-nested-many-without-gallery.input';
import { GalleryImageCreateNestedManyWithoutGalleriesInput } from '../gallery-image/gallery-image-create-nested-many-without-galleries.input';

@InputType()
export class GalleryCreateWithoutCategoriesInput {

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

    @Field(() => GalleryTagCreateNestedManyWithoutGalleryInput, {nullable:true})
    tags?: GalleryTagCreateNestedManyWithoutGalleryInput;

    @Field(() => GalleryImageCreateNestedManyWithoutGalleriesInput, {nullable:true})
    images?: GalleryImageCreateNestedManyWithoutGalleriesInput;
}
