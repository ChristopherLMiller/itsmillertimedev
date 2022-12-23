import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PostTagCountAggregate } from './post-tag-count-aggregate.output';
import { PostTagAvgAggregate } from './post-tag-avg-aggregate.output';
import { PostTagSumAggregate } from './post-tag-sum-aggregate.output';
import { PostTagMinAggregate } from './post-tag-min-aggregate.output';
import { PostTagMaxAggregate } from './post-tag-max-aggregate.output';

@ObjectType()
export class AggregatePostTag {

    @Field(() => PostTagCountAggregate, {nullable:true})
    _count?: PostTagCountAggregate;

    @Field(() => PostTagAvgAggregate, {nullable:true})
    _avg?: PostTagAvgAggregate;

    @Field(() => PostTagSumAggregate, {nullable:true})
    _sum?: PostTagSumAggregate;

    @Field(() => PostTagMinAggregate, {nullable:true})
    _min?: PostTagMinAggregate;

    @Field(() => PostTagMaxAggregate, {nullable:true})
    _max?: PostTagMaxAggregate;
}
