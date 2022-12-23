import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class GalleryCategoryCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    slug!: number;

    @Field(() => Int, {nullable:false})
    galleryId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
