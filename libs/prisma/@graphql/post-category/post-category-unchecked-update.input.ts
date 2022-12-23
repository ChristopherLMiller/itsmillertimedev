import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PostUncheckedUpdateManyWithoutCategoryNestedInput } from '../post/post-unchecked-update-many-without-category-nested.input';

@InputType()
export class PostCategoryUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => PostUncheckedUpdateManyWithoutCategoryNestedInput, {nullable:true})
    posts?: PostUncheckedUpdateManyWithoutCategoryNestedInput;
}
