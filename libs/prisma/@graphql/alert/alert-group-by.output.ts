import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AlertCountAggregate } from './alert-count-aggregate.output';
import { AlertAvgAggregate } from './alert-avg-aggregate.output';
import { AlertSumAggregate } from './alert-sum-aggregate.output';
import { AlertMinAggregate } from './alert-min-aggregate.output';
import { AlertMaxAggregate } from './alert-max-aggregate.output';

@ObjectType()
export class AlertGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    validUntil!: Date | string;

    @Field(() => Date, {nullable:false})
    startDate!: Date | string;

    @Field(() => Int, {nullable:false})
    AlertAttempts!: number;

    @Field(() => AlertCountAggregate, {nullable:true})
    _count?: AlertCountAggregate;

    @Field(() => AlertAvgAggregate, {nullable:true})
    _avg?: AlertAvgAggregate;

    @Field(() => AlertSumAggregate, {nullable:true})
    _sum?: AlertSumAggregate;

    @Field(() => AlertMinAggregate, {nullable:true})
    _min?: AlertMinAggregate;

    @Field(() => AlertMaxAggregate, {nullable:true})
    _max?: AlertMaxAggregate;
}
