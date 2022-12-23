import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PostUpdateManyWithoutCategoryNestedInput } from '../post/post-update-many-without-category-nested.input';

@InputType()
export class PostCategoryUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => PostUpdateManyWithoutCategoryNestedInput, {nullable:true})
    posts?: PostUpdateManyWithoutCategoryNestedInput;
}
