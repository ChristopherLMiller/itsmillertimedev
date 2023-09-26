import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClockifyTimerWhereInput } from './clockify-timer-where.input';
import { Type } from 'class-transformer';
import { ClockifyTimerOrderByWithRelationInput } from './clockify-timer-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ClockifyTimerWhereUniqueInput } from './clockify-timer-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ClockifyTimerCountAggregateInput } from './clockify-timer-count-aggregate.input';
import { ClockifyTimerAvgAggregateInput } from './clockify-timer-avg-aggregate.input';
import { ClockifyTimerSumAggregateInput } from './clockify-timer-sum-aggregate.input';
import { ClockifyTimerMinAggregateInput } from './clockify-timer-min-aggregate.input';
import { ClockifyTimerMaxAggregateInput } from './clockify-timer-max-aggregate.input';

@ArgsType()
export class ClockifyTimerAggregateArgs {

    @Field(() => ClockifyTimerWhereInput, {nullable:true})
    @Type(() => ClockifyTimerWhereInput)
    where?: ClockifyTimerWhereInput;

    @Field(() => [ClockifyTimerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ClockifyTimerOrderByWithRelationInput>;

    @Field(() => ClockifyTimerWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ClockifyTimerWhereUniqueInput, 'projectId' | 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ClockifyTimerCountAggregateInput, {nullable:true})
    _count?: ClockifyTimerCountAggregateInput;

    @Field(() => ClockifyTimerAvgAggregateInput, {nullable:true})
    _avg?: ClockifyTimerAvgAggregateInput;

    @Field(() => ClockifyTimerSumAggregateInput, {nullable:true})
    _sum?: ClockifyTimerSumAggregateInput;

    @Field(() => ClockifyTimerMinAggregateInput, {nullable:true})
    _min?: ClockifyTimerMinAggregateInput;

    @Field(() => ClockifyTimerMaxAggregateInput, {nullable:true})
    _max?: ClockifyTimerMaxAggregateInput;
}
