import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCategoryCreateNestedOneWithoutPostsInput } from '../post-category/post-category-create-nested-one-without-posts.input';
import { PostTagCreateNestedManyWithoutPostsInput } from '../post-tag/post-tag-create-nested-many-without-posts.input';

@InputType()
export class PostCreateWithoutFeaturedImageInput {

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

    @Field(() => PostCategoryCreateNestedOneWithoutPostsInput, {nullable:false})
    category!: PostCategoryCreateNestedOneWithoutPostsInput;

    @Field(() => PostTagCreateNestedManyWithoutPostsInput, {nullable:true})
    tags?: PostTagCreateNestedManyWithoutPostsInput;
}
