import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PostCreateNestedManyWithoutTagsInput } from '../post/post-create-nested-many-without-tags.input';

@InputType()
export class PostTagCreateInput {

    @Field(() => Int, {nullable:true})
    postId?: number;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => PostCreateNestedManyWithoutTagsInput, {nullable:true})
    posts?: PostCreateNestedManyWithoutTagsInput;
}
