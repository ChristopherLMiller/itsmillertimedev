import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Post } from '../post/post.model';
import { PostTagCount } from './post-tag-count.output';

@ObjectType()
export class PostTag {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    postId!: number | null;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => [Post], {nullable:true})
    posts?: Array<Post>;

    @Field(() => PostTagCount, {nullable:false})
    _count?: PostTagCount;
}
