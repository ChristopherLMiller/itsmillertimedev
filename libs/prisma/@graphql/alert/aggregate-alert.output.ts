import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AlertCountAggregate } from './alert-count-aggregate.output';
import { AlertAvgAggregate } from './alert-avg-aggregate.output';
import { AlertSumAggregate } from './alert-sum-aggregate.output';
import { AlertMinAggregate } from './alert-min-aggregate.output';
import { AlertMaxAggregate } from './alert-max-aggregate.output';

@ObjectType()
export class AggregateAlert {

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
