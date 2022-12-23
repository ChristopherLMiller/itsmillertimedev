import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MarkerWhereInput } from './marker-where.input';
import { Type } from 'class-transformer';
import { MarkerOrderByWithAggregationInput } from './marker-order-by-with-aggregation.input';
import { MarkerScalarFieldEnum } from './marker-scalar-field.enum';
import { MarkerScalarWhereWithAggregatesInput } from './marker-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MarkerCountAggregateInput } from './marker-count-aggregate.input';
import { MarkerAvgAggregateInput } from './marker-avg-aggregate.input';
import { MarkerSumAggregateInput } from './marker-sum-aggregate.input';
import { MarkerMinAggregateInput } from './marker-min-aggregate.input';
import { MarkerMaxAggregateInput } from './marker-max-aggregate.input';

@ArgsType()
export class MarkerGroupByArgs {

    @Field(() => MarkerWhereInput, {nullable:true})
    @Type(() => MarkerWhereInput)
    where?: MarkerWhereInput;

    @Field(() => [MarkerOrderByWithAggregationInput], {nullable:true})
    @Type(() => MarkerOrderByWithAggregationInput)
    orderBy?: Array<MarkerOrderByWithAggregationInput>;

    @Field(() => [MarkerScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MarkerScalarFieldEnum>;

    @Field(() => MarkerScalarWhereWithAggregatesInput, {nullable:true})
    @Type(() => MarkerScalarWhereWithAggregatesInput)
    having?: MarkerScalarWhereWithAggregatesInput;

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
