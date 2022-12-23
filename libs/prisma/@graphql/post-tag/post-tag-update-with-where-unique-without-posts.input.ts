import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostTagWhereUniqueInput } from './post-tag-where-unique.input';
import { Type } from 'class-transformer';
import { PostTagUpdateWithoutPostsInput } from './post-tag-update-without-posts.input';

@InputType()
export class PostTagUpdateWithWhereUniqueWithoutPostsInput {

    @Field(() => PostTagWhereUniqueInput, {nullable:false})
    @Type(() => PostTagWhereUniqueInput)
    where!: PostTagWhereUniqueInput;

    @Field(() => PostTagUpdateWithoutPostsInput, {nullable:false})
    @Type(() => PostTagUpdateWithoutPostsInput)
    data!: PostTagUpdateWithoutPostsInput;
}
