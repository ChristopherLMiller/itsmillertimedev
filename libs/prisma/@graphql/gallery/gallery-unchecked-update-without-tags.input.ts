import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumVisibilityFieldUpdateOperationsInput } from '../prisma/enum-visibility-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { GalleryCategoryUncheckedUpdateManyWithoutGalleryNestedInput } from '../gallery-category/gallery-category-unchecked-update-many-without-gallery-nested.input';
import { GalleryImageUncheckedUpdateManyWithoutGalleriesNestedInput } from '../gallery-image/gallery-image-unchecked-update-many-without-galleries-nested.input';

@InputType()
export class GalleryUncheckedUpdateWithoutTagsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

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

    @Field(() => GalleryCategoryUncheckedUpdateManyWithoutGalleryNestedInput, {nullable:true})
    categories?: GalleryCategoryUncheckedUpdateManyWithoutGalleryNestedInput;

    @Field(() => GalleryImageUncheckedUpdateManyWithoutGalleriesNestedInput, {nullable:true})
    images?: GalleryImageUncheckedUpdateManyWithoutGalleriesNestedInput;
}
