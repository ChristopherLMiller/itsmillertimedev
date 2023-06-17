import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ModelTagsWhereInput } from './model-tags-where.input';
import { Type } from 'class-transformer';
import { ModelTagsOrderByWithRelationInput } from './model-tags-order-by-with-relation.input';
import { ModelTagsWhereUniqueInput } from './model-tags-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ModelTagsCountAggregateInput } from './model-tags-count-aggregate.input';
import { ModelTagsAvgAggregateInput } from './model-tags-avg-aggregate.input';
import { ModelTagsSumAggregateInput } from './model-tags-sum-aggregate.input';
import { ModelTagsMinAggregateInput } from './model-tags-min-aggregate.input';
import { ModelTagsMaxAggregateInput } from './model-tags-max-aggregate.input';

@ArgsType()
export class ModelTagsAggregateArgs {

    @Field(() => ModelTagsWhereInput, {nullable:true})
    @Type(() => ModelTagsWhereInput)
    where?: ModelTagsWhereInput;

    @Field(() => [ModelTagsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ModelTagsOrderByWithRelationInput>;

    @Field(() => ModelTagsWhereUniqueInput, {nullable:true})
    cursor?: ModelTagsWhereUniqueInput;

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
