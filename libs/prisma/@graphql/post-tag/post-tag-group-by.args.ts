import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostTagWhereInput } from './post-tag-where.input';
import { Type } from 'class-transformer';
import { PostTagOrderByWithAggregationInput } from './post-tag-order-by-with-aggregation.input';
import { PostTagScalarFieldEnum } from './post-tag-scalar-field.enum';
import { PostTagScalarWhereWithAggregatesInput } from './post-tag-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PostTagCountAggregateInput } from './post-tag-count-aggregate.input';
import { PostTagAvgAggregateInput } from './post-tag-avg-aggregate.input';
import { PostTagSumAggregateInput } from './post-tag-sum-aggregate.input';
import { PostTagMinAggregateInput } from './post-tag-min-aggregate.input';
import { PostTagMaxAggregateInput } from './post-tag-max-aggregate.input';

@ArgsType()
export class PostTagGroupByArgs {

    @Field(() => PostTagWhereInput, {nullable:true})
    @Type(() => PostTagWhereInput)
    where?: PostTagWhereInput;

    @Field(() => [PostTagOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PostTagOrderByWithAggregationInput>;

    @Field(() => [PostTagScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PostTagScalarFieldEnum>;

    @Field(() => PostTagScalarWhereWithAggregatesInput, {nullable:true})
    having?: PostTagScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PostTagCountAggregateInput, {nullable:true})
    _count?: PostTagCountAggregateInput;

    @Field(() => PostTagAvgAggregateInput, {nullable:true})
    _avg?: PostTagAvgAggregateInput;

    @Field(() => PostTagSumAggregateInput, {nullable:true})
    _sum?: PostTagSumAggregateInput;

    @Field(() => PostTagMinAggregateInput, {nullable:true})
    _min?: PostTagMinAggregateInput;

    @Field(() => PostTagMaxAggregateInput, {nullable:true})
    _max?: PostTagMaxAggregateInput;
}
