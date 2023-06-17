import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ModelWhereInput } from './model-where.input';
import { Type } from 'class-transformer';
import { ModelOrderByWithRelationInput } from './model-order-by-with-relation.input';
import { ModelWhereUniqueInput } from './model-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ModelCountAggregateInput } from './model-count-aggregate.input';
import { ModelAvgAggregateInput } from './model-avg-aggregate.input';
import { ModelSumAggregateInput } from './model-sum-aggregate.input';
import { ModelMinAggregateInput } from './model-min-aggregate.input';
import { ModelMaxAggregateInput } from './model-max-aggregate.input';

@ArgsType()
export class ModelAggregateArgs {

    @Field(() => ModelWhereInput, {nullable:true})
    @Type(() => ModelWhereInput)
    where?: ModelWhereInput;

    @Field(() => [ModelOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ModelOrderByWithRelationInput>;

    @Field(() => ModelWhereUniqueInput, {nullable:true})
    cursor?: ModelWhereUniqueInput;

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
