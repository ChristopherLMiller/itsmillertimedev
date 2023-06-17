import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ModelTagsWhereInput } from './model-tags-where.input';
import { Type } from 'class-transformer';
import { ModelTagsOrderByWithAggregationInput } from './model-tags-order-by-with-aggregation.input';
import { ModelTagsScalarFieldEnum } from './model-tags-scalar-field.enum';
import { ModelTagsScalarWhereWithAggregatesInput } from './model-tags-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ModelTagsCountAggregateInput } from './model-tags-count-aggregate.input';
import { ModelTagsAvgAggregateInput } from './model-tags-avg-aggregate.input';
import { ModelTagsSumAggregateInput } from './model-tags-sum-aggregate.input';
import { ModelTagsMinAggregateInput } from './model-tags-min-aggregate.input';
import { ModelTagsMaxAggregateInput } from './model-tags-max-aggregate.input';

@ArgsType()
export class ModelTagsGroupByArgs {

    @Field(() => ModelTagsWhereInput, {nullable:true})
    @Type(() => ModelTagsWhereInput)
    where?: ModelTagsWhereInput;

    @Field(() => [ModelTagsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ModelTagsOrderByWithAggregationInput>;

    @Field(() => [ModelTagsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ModelTagsScalarFieldEnum>;

    @Field(() => ModelTagsScalarWhereWithAggregatesInput, {nullable:true})
    having?: ModelTagsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ModelTagsCountAggregateInput, {nullable:true})
    _count?: ModelTagsCountAggregateInput;

    @Field(() => ModelTagsAvgAggregateInput, {nullable:true})
    _avg?: ModelTagsAvgAggregateInput;

    @Field(() => ModelTagsSumAggregateInput, {nullable:true})
    _sum?: ModelTagsSumAggregateInput;

    @Field(() => ModelTagsMinAggregateInput, {nullable:true})
    _min?: ModelTagsMinAggregateInput;

    @Field(() => ModelTagsMaxAggregateInput, {nullable:true})
    _max?: ModelTagsMaxAggregateInput;
}
