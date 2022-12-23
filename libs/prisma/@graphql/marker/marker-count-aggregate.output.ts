import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MarkerCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    lat!: number;

    @Field(() => Int, {nullable:false})
    lon!: number;

    @Field(() => Int, {nullable:false})
    siteURL!: number;

    @Field(() => Int, {nullable:false})
    galleryURL!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    rating!: number;

    @Field(() => Int, {nullable:false})
    visited!: number;

    @Field(() => Int, {nullable:false})
    visits!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
