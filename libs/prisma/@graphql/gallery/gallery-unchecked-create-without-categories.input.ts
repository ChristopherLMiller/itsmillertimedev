import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Visibility } from '../prisma/visibility.enum';
import { GalleryTagUncheckedCreateNestedManyWithoutGalleryInput } from '../gallery-tag/gallery-tag-unchecked-create-nested-many-without-gallery.input';
import { GalleryImageUncheckedCreateNestedManyWithoutGalleriesInput } from '../gallery-image/gallery-image-unchecked-create-nested-many-without-galleries.input';

@InputType()
export class GalleryUncheckedCreateWithoutCategoriesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => GalleryTagUncheckedCreateNestedManyWithoutGalleryInput, {nullable:true})
    tags?: GalleryTagUncheckedCreateNestedManyWithoutGalleryInput;

    @Field(() => GalleryImageUncheckedCreateNestedManyWithoutGalleriesInput, {nullable:true})
    images?: GalleryImageUncheckedCreateNestedManyWithoutGalleriesInput;
}
