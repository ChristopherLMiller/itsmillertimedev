import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PostTagUncheckedCreateNestedManyWithoutPostsInput } from '../post-tag/post-tag-unchecked-create-nested-many-without-posts.input';

@InputType()
export class PostUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    metaTitle!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    summary!: string;

    @Field(() => Boolean, {nullable:false})
    published!: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    publishedAt?: Date | string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => String, {nullable:true})
    imagePublic_id?: string;

    @Field(() => Int, {nullable:false})
    postCategoryId!: number;

    @Field(() => PostTagUncheckedCreateNestedManyWithoutPostsInput, {nullable:true})
    tags?: PostTagUncheckedCreateNestedManyWithoutPostsInput;
}
