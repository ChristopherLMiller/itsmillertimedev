import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PageCountAggregate } from './page-count-aggregate.output';
import { PageAvgAggregate } from './page-avg-aggregate.output';
import { PageSumAggregate } from './page-sum-aggregate.output';
import { PageMinAggregate } from './page-min-aggregate.output';
import { PageMaxAggregate } from './page-max-aggregate.output';

@ObjectType()
export class PageGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    summary!: string;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:true})
    imagePublic_id?: string;

    @Field(() => Boolean, {nullable:false})
    isPublic!: boolean;

    @Field(() => PageCountAggregate, {nullable:true})
    _count?: PageCountAggregate;

    @Field(() => PageAvgAggregate, {nullable:true})
    _avg?: PageAvgAggregate;

    @Field(() => PageSumAggregate, {nullable:true})
    _sum?: PageSumAggregate;

    @Field(() => PageMinAggregate, {nullable:true})
    _min?: PageMinAggregate;

    @Field(() => PageMaxAggregate, {nullable:true})
    _max?: PageMaxAggregate;
}
