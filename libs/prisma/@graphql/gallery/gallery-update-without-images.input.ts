import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumVisibilityFieldUpdateOperationsInput } from '../prisma/enum-visibility-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { GalleryCategoryUpdateManyWithoutGalleryNestedInput } from '../gallery-category/gallery-category-update-many-without-gallery-nested.input';
import { GalleryTagUpdateManyWithoutGalleryNestedInput } from '../gallery-tag/gallery-tag-update-many-without-gallery-nested.input';

@InputType()
export class GalleryUpdateWithoutImagesInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    meta?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => EnumVisibilityFieldUpdateOperationsInput, {nullable:true})
    visibility?: EnumVisibilityFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isNsfw?: BoolFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    image?: StringFieldUpdateOperationsInput;

    @Field(() => GalleryCategoryUpdateManyWithoutGalleryNestedInput, {nullable:true})
    categories?: GalleryCategoryUpdateManyWithoutGalleryNestedInput;

    @Field(() => GalleryTagUpdateManyWithoutGalleryNestedInput, {nullable:true})
    tags?: GalleryTagUpdateManyWithoutGalleryNestedInput;
}