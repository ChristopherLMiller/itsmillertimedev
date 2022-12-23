import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ClockifyTimerCountAggregate } from './clockify-timer-count-aggregate.output';
import { ClockifyTimerAvgAggregate } from './clockify-timer-avg-aggregate.output';
import { ClockifyTimerSumAggregate } from './clockify-timer-sum-aggregate.output';
import { ClockifyTimerMinAggregate } from './clockify-timer-min-aggregate.output';
import { ClockifyTimerMaxAggregate } from './clockify-timer-max-aggregate.output';

@ObjectType()
export class ClockifyTimerGroupBy {

    @Field(() => String, {nullable:false})
    projectId!: string;

    @Field(() => String, {nullable:false})
    startTime!: string;

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => ClockifyTimerCountAggregate, {nullable:true})
    _count?: ClockifyTimerCountAggregate;

    @Field(() => ClockifyTimerAvgAggregate, {nullable:true})
    _avg?: ClockifyTimerAvgAggregate;

    @Field(() => ClockifyTimerSumAggregate, {nullable:true})
    _sum?: ClockifyTimerSumAggregate;

    @Field(() => ClockifyTimerMinAggregate, {nullable:true})
    _min?: ClockifyTimerMinAggregate;

    @Field(() => ClockifyTimerMaxAggregate, {nullable:true})
    _max?: ClockifyTimerMaxAggregate;
}
