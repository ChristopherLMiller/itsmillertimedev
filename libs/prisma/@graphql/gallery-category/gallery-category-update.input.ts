import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GalleryUpdateOneWithoutCategoriesNestedInput } from '../gallery/gallery-update-one-without-categories-nested.input';

@InputType()
export class GalleryCategoryUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => GalleryUpdateOneWithoutCategoriesNestedInput, {nullable:true})
    Gallery?: GalleryUpdateOneWithoutCategoriesNestedInput;
}
