import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCategoryWhereUniqueInput } from './post-category-where-unique.input';
import { Type } from 'class-transformer';
import { PostCategoryCreateWithoutPostsInput } from './post-category-create-without-posts.input';

@InputType()
export class PostCategoryCreateOrConnectWithoutPostsInput {

    @Field(() => PostCategoryWhereUniqueInput, {nullable:false})
    @Type(() => PostCategoryWhereUniqueInput)
    where!: PostCategoryWhereUniqueInput;

    @Field(() => PostCategoryCreateWithoutPostsInput, {nullable:false})
    @Type(() => PostCategoryCreateWithoutPostsInput)
    create!: PostCategoryCreateWithoutPostsInput;
}
