import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCategoryUpdateWithoutPostsInput } from './post-category-update-without-posts.input';
import { Type } from 'class-transformer';
import { PostCategoryCreateWithoutPostsInput } from './post-category-create-without-posts.input';

@InputType()
export class PostCategoryUpsertWithoutPostsInput {

    @Field(() => PostCategoryUpdateWithoutPostsInput, {nullable:false})
    @Type(() => PostCategoryUpdateWithoutPostsInput)
    update!: PostCategoryUpdateWithoutPostsInput;

    @Field(() => PostCategoryCreateWithoutPostsInput, {nullable:false})
    @Type(() => PostCategoryCreateWithoutPostsInput)
    create!: PostCategoryCreateWithoutPostsInput;
}
