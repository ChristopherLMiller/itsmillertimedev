import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCategoryWhereInput } from './post-category-where.input';
import { Type } from 'class-transformer';
import { PostCategoryUpdateWithoutPostsInput } from './post-category-update-without-posts.input';

@InputType()
export class PostCategoryUpdateToOneWithWhereWithoutPostsInput {

    @Field(() => PostCategoryWhereInput, {nullable:true})
    @Type(() => PostCategoryWhereInput)
    where?: PostCategoryWhereInput;

    @Field(() => PostCategoryUpdateWithoutPostsInput, {nullable:false})
    @Type(() => PostCategoryUpdateWithoutPostsInput)
    data!: PostCategoryUpdateWithoutPostsInput;
}
