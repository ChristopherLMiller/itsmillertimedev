import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumVisibilityFieldUpdateOperationsInput } from '../prisma/enum-visibility-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { ModelTagsUpdateManyWithoutModelNestedInput } from '../model-tags/model-tags-update-many-without-model-nested.input';
import { ImageUpdateManyWithoutModelNestedInput } from '../image/image-update-many-without-model-nested.input';
import { ScaleUpdateOneRequiredWithoutModelNestedInput } from '../scale/scale-update-one-required-without-model-nested.input';

@InputType()
export class ModelUpdateWithoutManufacturerInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    completed?: BoolFieldUpdateOperationsInput;

    @Field(() => EnumVisibilityFieldUpdateOperationsInput, {nullable:true})
    visibility?: EnumVisibilityFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    metaTitle?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    summary?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    featuredImage?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    clockifyProjectId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    contents?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    yearReleased?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    completedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    imagePublic_id?: StringFieldUpdateOperationsInput;

    @Field(() => ModelTagsUpdateManyWithoutModelNestedInput, {nullable:true})
    tags?: ModelTagsUpdateManyWithoutModelNestedInput;

    @Field(() => ImageUpdateManyWithoutModelNestedInput, {nullable:true})
    images?: ImageUpdateManyWithoutModelNestedInput;

    @Field(() => ScaleUpdateOneRequiredWithoutModelNestedInput, {nullable:true})
    scale?: ScaleUpdateOneRequiredWithoutModelNestedInput;
}
