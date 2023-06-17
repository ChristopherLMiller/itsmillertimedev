import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ModelCountAggregate } from './model-count-aggregate.output';
import { ModelAvgAggregate } from './model-avg-aggregate.output';
import { ModelSumAggregate } from './model-sum-aggregate.output';
import { ModelMinAggregate } from './model-min-aggregate.output';
import { ModelMaxAggregate } from './model-max-aggregate.output';

@ObjectType()
export class AggregateModel {

    @Field(() => ModelCountAggregate, {nullable:true})
    _count?: ModelCountAggregate;

    @Field(() => ModelAvgAggregate, {nullable:true})
    _avg?: ModelAvgAggregate;

    @Field(() => ModelSumAggregate, {nullable:true})
    _sum?: ModelSumAggregate;

    @Field(() => ModelMinAggregate, {nullable:true})
    _min?: ModelMinAggregate;

    @Field(() => ModelMaxAggregate, {nullable:true})
    _max?: ModelMaxAggregate;
}
