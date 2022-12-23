import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PostUpdateManyWithoutTagsNestedInput } from '../post/post-update-many-without-tags-nested.input';

@InputType()
export class PostTagUpdateInput {

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    postId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => PostUpdateManyWithoutTagsNestedInput, {nullable:true})
    posts?: PostUpdateManyWithoutTagsNestedInput;
}
