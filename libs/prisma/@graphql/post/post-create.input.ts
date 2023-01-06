import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ImageCreateNestedOneWithoutPostInput } from '../image/image-create-nested-one-without-post.input';
import { PostCategoryCreateNestedOneWithoutPostsInput } from '../post-category/post-category-create-nested-one-without-posts.input';
import { PostTagCreateNestedManyWithoutPostsInput } from '../post-tag/post-tag-create-nested-many-without-posts.input';

@InputType()
export class PostCreateInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    metaTitle!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    summary!: string;

    @Field(() => Int, {nullable:true})
    wordCount?: number;

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

    @Field(() => ImageCreateNestedOneWithoutPostInput, {nullable:true})
    featuredImage?: ImageCreateNestedOneWithoutPostInput;

    @Field(() => PostCategoryCreateNestedOneWithoutPostsInput, {nullable:false})
    category!: PostCategoryCreateNestedOneWithoutPostsInput;

    @Field(() => PostTagCreateNestedManyWithoutPostsInput, {nullable:true})
    tags?: PostTagCreateNestedManyWithoutPostsInput;
}
