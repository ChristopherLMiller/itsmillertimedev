import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class GalleryCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    slug!: number;

    @Field(() => Int, {nullable:false})
    meta!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    visibility!: number;

    @Field(() => Int, {nullable:false})
    isNsfw!: number;

    @Field(() => Int, {nullable:false})
    image!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
