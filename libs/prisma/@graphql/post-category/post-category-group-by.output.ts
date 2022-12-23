import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PostCategoryCountAggregate } from './post-category-count-aggregate.output';
import { PostCategoryAvgAggregate } from './post-category-avg-aggregate.output';
import { PostCategorySumAggregate } from './post-category-sum-aggregate.output';
import { PostCategoryMinAggregate } from './post-category-min-aggregate.output';
import { PostCategoryMaxAggregate } from './post-category-max-aggregate.output';

@ObjectType()
export class PostCategoryGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => PostCategoryCountAggregate, {nullable:true})
    _count?: PostCategoryCountAggregate;

    @Field(() => PostCategoryAvgAggregate, {nullable:true})
    _avg?: PostCategoryAvgAggregate;

    @Field(() => PostCategorySumAggregate, {nullable:true})
    _sum?: PostCategorySumAggregate;

    @Field(() => PostCategoryMinAggregate, {nullable:true})
    _min?: PostCategoryMinAggregate;

    @Field(() => PostCategoryMaxAggregate, {nullable:true})
    _max?: PostCategoryMaxAggregate;
}
