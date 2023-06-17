import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ModelWhereInput } from './model-where.input';
import { Type } from 'class-transformer';
import { ModelOrderByWithAggregationInput } from './model-order-by-with-aggregation.input';
import { ModelScalarFieldEnum } from './model-scalar-field.enum';
import { ModelScalarWhereWithAggregatesInput } from './model-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ModelCountAggregateInput } from './model-count-aggregate.input';
import { ModelAvgAggregateInput } from './model-avg-aggregate.input';
import { ModelSumAggregateInput } from './model-sum-aggregate.input';
import { ModelMinAggregateInput } from './model-min-aggregate.input';
import { ModelMaxAggregateInput } from './model-max-aggregate.input';

@ArgsType()
export class ModelGroupByArgs {

    @Field(() => ModelWhereInput, {nullable:true})
    @Type(() => ModelWhereInput)
    where?: ModelWhereInput;

    @Field(() => [ModelOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ModelOrderByWithAggregationInput>;

    @Field(() => [ModelScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ModelScalarFieldEnum>;

    @Field(() => ModelScalarWhereWithAggregatesInput, {nullable:true})
    having?: ModelScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ModelCountAggregateInput, {nullable:true})
    _count?: ModelCountAggregateInput;

    @Field(() => ModelAvgAggregateInput, {nullable:true})
    _avg?: ModelAvgAggregateInput;

    @Field(() => ModelSumAggregateInput, {nullable:true})
    _sum?: ModelSumAggregateInput;

    @Field(() => ModelMinAggregateInput, {nullable:true})
    _min?: ModelMinAggregateInput;

    @Field(() => ModelMaxAggregateInput, {nullable:true})
    _max?: ModelMaxAggregateInput;
}
