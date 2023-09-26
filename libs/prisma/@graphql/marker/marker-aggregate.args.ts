import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MarkerWhereInput } from './marker-where.input';
import { Type } from 'class-transformer';
import { MarkerOrderByWithRelationInput } from './marker-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MarkerWhereUniqueInput } from './marker-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MarkerCountAggregateInput } from './marker-count-aggregate.input';
import { MarkerAvgAggregateInput } from './marker-avg-aggregate.input';
import { MarkerSumAggregateInput } from './marker-sum-aggregate.input';
import { MarkerMinAggregateInput } from './marker-min-aggregate.input';
import { MarkerMaxAggregateInput } from './marker-max-aggregate.input';

@ArgsType()
export class MarkerAggregateArgs {

    @Field(() => MarkerWhereInput, {nullable:true})
    @Type(() => MarkerWhereInput)
    where?: MarkerWhereInput;

    @Field(() => [MarkerOrderByWithRelationInput], {nullable:true})
    @Type(() => MarkerOrderByWithRelationInput)
    orderBy?: Array<MarkerOrderByWithRelationInput>;

    @Field(() => MarkerWhereUniqueInput, {nullable:true})
    @Type(() => MarkerWhereUniqueInput)
    cursor?: Prisma.AtLeast<MarkerWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MarkerCountAggregateInput, {nullable:true})
    @Type(() => MarkerCountAggregateInput)
    _count?: MarkerCountAggregateInput;

    @Field(() => MarkerAvgAggregateInput, {nullable:true})
    @Type(() => MarkerAvgAggregateInput)
    _avg?: MarkerAvgAggregateInput;

    @Field(() => MarkerSumAggregateInput, {nullable:true})
    @Type(() => MarkerSumAggregateInput)
    _sum?: MarkerSumAggregateInput;

    @Field(() => MarkerMinAggregateInput, {nullable:true})
    @Type(() => MarkerMinAggregateInput)
    _min?: MarkerMinAggregateInput;

    @Field(() => MarkerMaxAggregateInput, {nullable:true})
    @Type(() => MarkerMaxAggregateInput)
    _max?: MarkerMaxAggregateInput;
}
