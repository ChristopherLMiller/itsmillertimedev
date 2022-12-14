import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostTagCreateWithoutPostsInput } from './post-tag-create-without-posts.input';
import { Type } from 'class-transformer';
import { PostTagCreateOrConnectWithoutPostsInput } from './post-tag-create-or-connect-without-posts.input';
import { PostTagWhereUniqueInput } from './post-tag-where-unique.input';

@InputType()
export class PostTagCreateNestedManyWithoutPostsInput {

    @Field(() => [PostTagCreateWithoutPostsInput], {nullable:true})
    @Type(() => PostTagCreateWithoutPostsInput)
    create?: Array<PostTagCreateWithoutPostsInput>;

    @Field(() => [PostTagCreateOrConnectWithoutPostsInput], {nullable:true})
    @Type(() => PostTagCreateOrConnectWithoutPostsInput)
    connectOrCreate?: Array<PostTagCreateOrConnectWithoutPostsInput>;

    @Field(() => [PostTagWhereUniqueInput], {nullable:true})
    @Type(() => PostTagWhereUniqueInput)
    connect?: Array<PostTagWhereUniqueInput>;
}
