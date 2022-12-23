import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostCategoryWhereInput } from './post-category-where.input';
import { Type } from 'class-transformer';
import { PostCategoryOrderByWithAggregationInput } from './post-category-order-by-with-aggregation.input';
import { PostCategoryScalarFieldEnum } from './post-category-scalar-field.enum';
import { PostCategoryScalarWhereWithAggregatesInput } from './post-category-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PostCategoryCountAggregateInput } from './post-category-count-aggregate.input';
import { PostCategoryAvgAggregateInput } from './post-category-avg-aggregate.input';
import { PostCategorySumAggregateInput } from './post-category-sum-aggregate.input';
import { PostCategoryMinAggregateInput } from './post-category-min-aggregate.input';
import { PostCategoryMaxAggregateInput } from './post-category-max-aggregate.input';

@ArgsType()
export class PostCategoryGroupByArgs {

    @Field(() => PostCategoryWhereInput, {nullable:true})
    @Type(() => PostCategoryWhereInput)
    where?: PostCategoryWhereInput;

    @Field(() => [PostCategoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PostCategoryOrderByWithAggregationInput>;

    @Field(() => [PostCategoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PostCategoryScalarFieldEnum>;

    @Field(() => PostCategoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: PostCategoryScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PostCategoryCountAggregateInput, {nullable:true})
    _count?: PostCategoryCountAggregateInput;

    @Field(() => PostCategoryAvgAggregateInput, {nullable:true})
    _avg?: PostCategoryAvgAggregateInput;

    @Field(() => PostCategorySumAggregateInput, {nullable:true})
    _sum?: PostCategorySumAggregateInput;

    @Field(() => PostCategoryMinAggregateInput, {nullable:true})
    _min?: PostCategoryMinAggregateInput;

    @Field(() => PostCategoryMaxAggregateInput, {nullable:true})
    _max?: PostCategoryMaxAggregateInput;
}
