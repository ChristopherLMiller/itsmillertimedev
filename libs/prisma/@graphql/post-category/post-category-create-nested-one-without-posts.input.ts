import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCategoryCreateWithoutPostsInput } from './post-category-create-without-posts.input';
import { Type } from 'class-transformer';
import { PostCategoryCreateOrConnectWithoutPostsInput } from './post-category-create-or-connect-without-posts.input';
import { Prisma } from '@prisma/client';
import { PostCategoryWhereUniqueInput } from './post-category-where-unique.input';

@InputType()
export class PostCategoryCreateNestedOneWithoutPostsInput {

    @Field(() => PostCategoryCreateWithoutPostsInput, {nullable:true})
    @Type(() => PostCategoryCreateWithoutPostsInput)
    create?: PostCategoryCreateWithoutPostsInput;

    @Field(() => PostCategoryCreateOrConnectWithoutPostsInput, {nullable:true})
    @Type(() => PostCategoryCreateOrConnectWithoutPostsInput)
    connectOrCreate?: PostCategoryCreateOrConnectWithoutPostsInput;

    @Field(() => PostCategoryWhereUniqueInput, {nullable:true})
    @Type(() => PostCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<PostCategoryWhereUniqueInput, 'id' | 'slug'>;
}
