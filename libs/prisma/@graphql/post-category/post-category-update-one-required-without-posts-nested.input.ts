import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCategoryCreateWithoutPostsInput } from './post-category-create-without-posts.input';
import { Type } from 'class-transformer';
import { PostCategoryCreateOrConnectWithoutPostsInput } from './post-category-create-or-connect-without-posts.input';
import { PostCategoryUpsertWithoutPostsInput } from './post-category-upsert-without-posts.input';
import { PostCategoryWhereUniqueInput } from './post-category-where-unique.input';
import { PostCategoryUpdateWithoutPostsInput } from './post-category-update-without-posts.input';

@InputType()
export class PostCategoryUpdateOneRequiredWithoutPostsNestedInput {

    @Field(() => PostCategoryCreateWithoutPostsInput, {nullable:true})
    @Type(() => PostCategoryCreateWithoutPostsInput)
    create?: PostCategoryCreateWithoutPostsInput;

    @Field(() => PostCategoryCreateOrConnectWithoutPostsInput, {nullable:true})
    @Type(() => PostCategoryCreateOrConnectWithoutPostsInput)
    connectOrCreate?: PostCategoryCreateOrConnectWithoutPostsInput;

    @Field(() => PostCategoryUpsertWithoutPostsInput, {nullable:true})
    @Type(() => PostCategoryUpsertWithoutPostsInput)
    upsert?: PostCategoryUpsertWithoutPostsInput;

    @Field(() => PostCategoryWhereUniqueInput, {nullable:true})
    @Type(() => PostCategoryWhereUniqueInput)
    connect?: PostCategoryWhereUniqueInput;

    @Field(() => PostCategoryUpdateWithoutPostsInput, {nullable:true})
    @Type(() => PostCategoryUpdateWithoutPostsInput)
    update?: PostCategoryUpdateWithoutPostsInput;
}
