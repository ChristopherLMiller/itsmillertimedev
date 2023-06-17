import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ScaleCountAggregate } from './scale-count-aggregate.output';
import { ScaleAvgAggregate } from './scale-avg-aggregate.output';
import { ScaleSumAggregate } from './scale-sum-aggregate.output';
import { ScaleMinAggregate } from './scale-min-aggregate.output';
import { ScaleMaxAggregate } from './scale-max-aggregate.output';

@ObjectType()
export class ScaleGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => ScaleCountAggregate, {nullable:true})
    _count?: ScaleCountAggregate;

    @Field(() => ScaleAvgAggregate, {nullable:true})
    _avg?: ScaleAvgAggregate;

    @Field(() => ScaleSumAggregate, {nullable:true})
    _sum?: ScaleSumAggregate;

    @Field(() => ScaleMinAggregate, {nullable:true})
    _min?: ScaleMinAggregate;

    @Field(() => ScaleMaxAggregate, {nullable:true})
    _max?: ScaleMaxAggregate;
}
