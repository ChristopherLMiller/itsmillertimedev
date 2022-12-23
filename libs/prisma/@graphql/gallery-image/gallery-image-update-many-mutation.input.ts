import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumPublicationStatusFieldUpdateOperationsInput } from '../prisma/enum-publication-status-field-update-operations.input';
import { NullableEnumVisibilityFieldUpdateOperationsInput } from '../prisma/nullable-enum-visibility-field-update-operations.input';

@InputType()
export class GalleryImageUpdateManyMutationInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => EnumPublicationStatusFieldUpdateOperationsInput, {nullable:true})
    published?: EnumPublicationStatusFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    publishedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableEnumVisibilityFieldUpdateOperationsInput, {nullable:true})
    visibility?: NullableEnumVisibilityFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: StringFieldUpdateOperationsInput;
}
