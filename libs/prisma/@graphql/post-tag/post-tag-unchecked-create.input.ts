import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PostUncheckedCreateNestedManyWithoutTagsInput } from '../post/post-unchecked-create-nested-many-without-tags.input';

@InputType()
export class PostTagUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    postId?: number;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => PostUncheckedCreateNestedManyWithoutTagsInput, {nullable:true})
    posts?: PostUncheckedCreateNestedManyWithoutTagsInput;
}
