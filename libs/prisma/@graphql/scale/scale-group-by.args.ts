import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScaleWhereInput } from './scale-where.input';
import { Type } from 'class-transformer';
import { ScaleOrderByWithAggregationInput } from './scale-order-by-with-aggregation.input';
import { ScaleScalarFieldEnum } from './scale-scalar-field.enum';
import { ScaleScalarWhereWithAggregatesInput } from './scale-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ScaleCountAggregateInput } from './scale-count-aggregate.input';
import { ScaleAvgAggregateInput } from './scale-avg-aggregate.input';
import { ScaleSumAggregateInput } from './scale-sum-aggregate.input';
import { ScaleMinAggregateInput } from './scale-min-aggregate.input';
import { ScaleMaxAggregateInput } from './scale-max-aggregate.input';

@ArgsType()
export class ScaleGroupByArgs {

    @Field(() => ScaleWhereInput, {nullable:true})
    @Type(() => ScaleWhereInput)
    where?: ScaleWhereInput;

    @Field(() => [ScaleOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ScaleOrderByWithAggregationInput>;

    @Field(() => [ScaleScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ScaleScalarFieldEnum>;

    @Field(() => ScaleScalarWhereWithAggregatesInput, {nullable:true})
    having?: ScaleScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ScaleCountAggregateInput, {nullable:true})
    _count?: ScaleCountAggregateInput;

    @Field(() => ScaleAvgAggregateInput, {nullable:true})
    _avg?: ScaleAvgAggregateInput;

    @Field(() => ScaleSumAggregateInput, {nullable:true})
    _sum?: ScaleSumAggregateInput;

    @Field(() => ScaleMinAggregateInput, {nullable:true})
    _min?: ScaleMinAggregateInput;

    @Field(() => ScaleMaxAggregateInput, {nullable:true})
    _max?: ScaleMaxAggregateInput;
}
