import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MarkerCountAggregate } from './marker-count-aggregate.output';
import { MarkerAvgAggregate } from './marker-avg-aggregate.output';
import { MarkerSumAggregate } from './marker-sum-aggregate.output';
import { MarkerMinAggregate } from './marker-min-aggregate.output';
import { MarkerMaxAggregate } from './marker-max-aggregate.output';

@ObjectType()
export class AggregateMarker {

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
