import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ModelCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    slug!: number;

    @Field(() => Int, {nullable:false})
    completed!: number;

    @Field(() => Int, {nullable:false})
    visibility!: number;

    @Field(() => Int, {nullable:false})
    metaTitle!: number;

    @Field(() => Int, {nullable:false})
    summary!: number;

    @Field(() => Int, {nullable:false})
    featuredImage!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    clockifyProjectId!: number;

    @Field(() => Int, {nullable:false})
    contents!: number;

    @Field(() => Int, {nullable:false})
    yearReleased!: number;

    @Field(() => Int, {nullable:false})
    completedAt!: number;

    @Field(() => Int, {nullable:false})
    imagePublic_id!: number;

    @Field(() => Int, {nullable:false})
    manufacturerId!: number;

    @Field(() => Int, {nullable:false})
    scaleId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
