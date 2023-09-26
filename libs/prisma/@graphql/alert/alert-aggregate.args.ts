import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AlertWhereInput } from './alert-where.input';
import { Type } from 'class-transformer';
import { AlertOrderByWithRelationInput } from './alert-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AlertWhereUniqueInput } from './alert-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AlertCountAggregateInput } from './alert-count-aggregate.input';
import { AlertAvgAggregateInput } from './alert-avg-aggregate.input';
import { AlertSumAggregateInput } from './alert-sum-aggregate.input';
import { AlertMinAggregateInput } from './alert-min-aggregate.input';
import { AlertMaxAggregateInput } from './alert-max-aggregate.input';

@ArgsType()
export class AlertAggregateArgs {

    @Field(() => AlertWhereInput, {nullable:true})
    @Type(() => AlertWhereInput)
    where?: AlertWhereInput;

    @Field(() => [AlertOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AlertOrderByWithRelationInput>;

    @Field(() => AlertWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AlertWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AlertCountAggregateInput, {nullable:true})
    _count?: AlertCountAggregateInput;

    @Field(() => AlertAvgAggregateInput, {nullable:true})
    _avg?: AlertAvgAggregateInput;

    @Field(() => AlertSumAggregateInput, {nullable:true})
    _sum?: AlertSumAggregateInput;

    @Field(() => AlertMinAggregateInput, {nullable:true})
    _min?: AlertMinAggregateInput;

    @Field(() => AlertMaxAggregateInput, {nullable:true})
    _max?: AlertMaxAggregateInput;
}
