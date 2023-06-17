import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PageCountAggregate } from './page-count-aggregate.output';
import { PageAvgAggregate } from './page-avg-aggregate.output';
import { PageSumAggregate } from './page-sum-aggregate.output';
import { PageMinAggregate } from './page-min-aggregate.output';
import { PageMaxAggregate } from './page-max-aggregate.output';

@ObjectType()
export class AggregatePage {

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
