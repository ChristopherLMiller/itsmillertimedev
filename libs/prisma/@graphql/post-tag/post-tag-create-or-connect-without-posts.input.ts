import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostTagWhereUniqueInput } from './post-tag-where-unique.input';
import { Type } from 'class-transformer';
import { PostTagCreateWithoutPostsInput } from './post-tag-create-without-posts.input';

@InputType()
export class PostTagCreateOrConnectWithoutPostsInput {

    @Field(() => PostTagWhereUniqueInput, {nullable:false})
    @Type(() => PostTagWhereUniqueInput)
    where!: PostTagWhereUniqueInput;

    @Field(() => PostTagCreateWithoutPostsInput, {nullable:false})
    @Type(() => PostTagCreateWithoutPostsInput)
    create!: PostTagCreateWithoutPostsInput;
}
