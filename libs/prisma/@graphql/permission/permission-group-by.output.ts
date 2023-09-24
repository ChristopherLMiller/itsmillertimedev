import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PermissionCountAggregate } from './permission-count-aggregate.output';
import { PermissionAvgAggregate } from './permission-avg-aggregate.output';
import { PermissionSumAggregate } from './permission-sum-aggregate.output';
import { PermissionMinAggregate } from './permission-min-aggregate.output';
import { PermissionMaxAggregate } from './permission-max-aggregate.output';

@ObjectType()
export class PermissionGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    node!: string;

    @Field(() => PermissionCountAggregate, {nullable:true})
    _count?: PermissionCountAggregate;

    @Field(() => PermissionAvgAggregate, {nullable:true})
    _avg?: PermissionAvgAggregate;

    @Field(() => PermissionSumAggregate, {nullable:true})
    _sum?: PermissionSumAggregate;

    @Field(() => PermissionMinAggregate, {nullable:true})
    _min?: PermissionMinAggregate;

    @Field(() => PermissionMaxAggregate, {nullable:true})
    _max?: PermissionMaxAggregate;
}
