import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Image } from '../image/image.model';
import { PostCategory } from '../post-category/post-category.model';
import { PostTag } from '../post-tag/post-tag.model';
import { PostCount } from './post-count.output';

@ObjectType()
export class Post {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    metaTitle!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    summary!: string;

    /**
     * @IsOptional
     */
    @Field(() => Boolean, {nullable:false,description:'@IsOptional'})
    published!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Date, {nullable:true})
    publishedAt!: Date | null;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => String, {nullable:true})
    imagePublic_id!: string | null;

    @Field(() => Int, {nullable:false})
    postCategoryId!: number;

    @Field(() => Image, {nullable:true})
    featuredImage?: Image | null;

    @Field(() => PostCategory, {nullable:false})
    category?: PostCategory;

    @Field(() => [PostTag], {nullable:true})
    tags?: Array<PostTag>;

    @Field(() => PostCount, {nullable:false})
    _count?: PostCount;
}
