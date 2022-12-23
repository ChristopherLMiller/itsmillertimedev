import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostTagWhereInput } from './post-tag-where.input';
import { Type } from 'class-transformer';
import { PostTagOrderByWithRelationInput } from './post-tag-order-by-with-relation.input';
import { PostTagWhereUniqueInput } from './post-tag-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PostTagCountAggregateInput } from './post-tag-count-aggregate.input';
import { PostTagAvgAggregateInput } from './post-tag-avg-aggregate.input';
import { PostTagSumAggregateInput } from './post-tag-sum-aggregate.input';
import { PostTagMinAggregateInput } from './post-tag-min-aggregate.input';
import { PostTagMaxAggregateInput } from './post-tag-max-aggregate.input';

@ArgsType()
export class PostTagAggregateArgs {

    @Field(() => PostTagWhereInput, {nullable:true})
    @Type(() => PostTagWhereInput)
    where?: PostTagWhereInput;

    @Field(() => [PostTagOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PostTagOrderByWithRelationInput>;

    @Field(() => PostTagWhereUniqueInput, {nullable:true})
    cursor?: PostTagWhereUniqueInput;

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
