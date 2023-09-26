import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Post } from '../post/post.model';
import { Page } from '../page/page.model';
import { Model } from '../model/model.model';
import { ImageCount } from './image-count.output';

@ObjectType()
export class Image {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => ID, {nullable:false})
    public_id!: string;

    @Field(() => Int, {nullable:true})
    version!: number | null;

    @Field(() => String, {nullable:true})
    format!: string | null;

    @Field(() => String, {nullable:true})
    url!: string | null;

    @Field(() => String, {nullable:true})
    secureUrl!: string | null;

    @Field(() => String, {nullable:true})
    alt!: string | null;

    @Field(() => String, {nullable:true})
    caption!: string | null;

    @Field(() => Int, {nullable:true})
    width!: number | null;

    @Field(() => Int, {nullable:true})
    height!: number | null;

    @Field(() => Int, {nullable:true})
    bytes!: number | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => String, {nullable:true})
    thumbnail!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    exif!: any | null;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Int, {nullable:true})
    modelId!: number | null;

    @Field(() => [Post], {nullable:true})
    Post?: Array<Post>;

    @Field(() => [Page], {nullable:true})
    Page?: Array<Page>;

    @Field(() => Model, {nullable:true})
    Model?: Model | null;

    @Field(() => ImageCount, {nullable:false})
    _count?: ImageCount;
}
