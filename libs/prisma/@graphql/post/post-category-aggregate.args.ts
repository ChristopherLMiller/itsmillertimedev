import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostCategoryWhereInput } from '../post-category/post-category-where.input';
import { Type } from 'class-transformer';
import { PostCategoryOrderByWithRelationInput } from '../post-category/post-category-order-by-with-relation.input';
import { PostCategoryWhereUniqueInput } from '../post-category/post-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PostCategoryCountAggregateInput } from '../post-category/post-category-count-aggregate.input';
import { PostCategoryAvgAggregateInput } from '../post-category/post-category-avg-aggregate.input';
import { PostCategorySumAggregateInput } from '../post-category/post-category-sum-aggregate.input';
import { PostCategoryMinAggregateInput } from '../post-category/post-category-min-aggregate.input';
import { PostCategoryMaxAggregateInput } from '../post-category/post-category-max-aggregate.input';

@ArgsType()
export class PostCategoryAggregateArgs {

    @Field(() => PostCategoryWhereInput, {nullable:true})
    @Type(() => PostCategoryWhereInput)
    where?: PostCategoryWhereInput;

    @Field(() => [PostCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PostCategoryOrderByWithRelationInput>;

    @Field(() => PostCategoryWhereUniqueInput, {nullable:true})
    cursor?: PostCategoryWhereUniqueInput;

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
