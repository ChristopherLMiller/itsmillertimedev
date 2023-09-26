import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Post } from '../post/post.model';
import { PostCategoryCount } from './post-category-count.output';

@ObjectType()
export class PostCategory {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => [Post], {nullable:true})
    posts?: Array<Post>;

    @Field(() => PostCategoryCount, {nullable:false})
    _count?: PostCategoryCount;
}
