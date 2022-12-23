import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { MarkerCountAggregate } from './marker-count-aggregate.output';
import { MarkerAvgAggregate } from './marker-avg-aggregate.output';
import { MarkerSumAggregate } from './marker-sum-aggregate.output';
import { MarkerMinAggregate } from './marker-min-aggregate.output';
import { MarkerMaxAggregate } from './marker-max-aggregate.output';

@ObjectType()
export class MarkerGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => GraphQLDecimal, {nullable:false})
    lat!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    lon!: Decimal;

    @Field(() => String, {nullable:true})
    siteURL?: string;

    @Field(() => String, {nullable:true})
    galleryURL?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Int, {nullable:false})
    rating!: number;

    @Field(() => Boolean, {nullable:false})
    visited!: boolean;

    @Field(() => Int, {nullable:false})
    visits!: number;

    @Field(() => MarkerCountAggregate, {nullable:true})
    _count?: MarkerCountAggregate;

    @Field(() => MarkerAvgAggregate, {nullable:true})
    _avg?: MarkerAvgAggregate;

    @Field(() => MarkerSumAggregate, {nullable:true})
    _sum?: MarkerSumAggregate;

    @Field(() => MarkerMinAggregate, {nullable:true})
    _min?: MarkerMinAggregate;

    @Field(() => MarkerMaxAggregate, {nullable:true})
    _max?: MarkerMaxAggregate;
}
