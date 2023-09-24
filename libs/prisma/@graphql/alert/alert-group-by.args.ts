import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AlertWhereInput } from './alert-where.input';
import { Type } from 'class-transformer';
import { AlertOrderByWithAggregationInput } from './alert-order-by-with-aggregation.input';
import { AlertScalarFieldEnum } from './alert-scalar-field.enum';
import { AlertScalarWhereWithAggregatesInput } from './alert-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AlertCountAggregateInput } from './alert-count-aggregate.input';
import { AlertAvgAggregateInput } from './alert-avg-aggregate.input';
import { AlertSumAggregateInput } from './alert-sum-aggregate.input';
import { AlertMinAggregateInput } from './alert-min-aggregate.input';
import { AlertMaxAggregateInput } from './alert-max-aggregate.input';

@ArgsType()
export class AlertGroupByArgs {

    @Field(() => AlertWhereInput, {nullable:true})
    @Type(() => AlertWhereInput)
    where?: AlertWhereInput;

    @Field(() => [AlertOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AlertOrderByWithAggregationInput>;

    @Field(() => [AlertScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AlertScalarFieldEnum>;

    @Field(() => AlertScalarWhereWithAggregatesInput, {nullable:true})
    having?: AlertScalarWhereWithAggregatesInput;

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
