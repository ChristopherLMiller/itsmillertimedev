import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GalleryUpdateOneWithoutTagsNestedInput } from '../gallery/gallery-update-one-without-tags-nested.input';

@InputType()
export class GalleryTagUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => GalleryUpdateOneWithoutTagsNestedInput, {nullable:true})
    Gallery?: GalleryUpdateOneWithoutTagsNestedInput;
}
