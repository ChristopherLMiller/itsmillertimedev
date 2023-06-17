import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ModelTagsCountAggregate } from './model-tags-count-aggregate.output';
import { ModelTagsAvgAggregate } from './model-tags-avg-aggregate.output';
import { ModelTagsSumAggregate } from './model-tags-sum-aggregate.output';
import { ModelTagsMinAggregate } from './model-tags-min-aggregate.output';
import { ModelTagsMaxAggregate } from './model-tags-max-aggregate.output';

@ObjectType()
export class AggregateModelTags {

    @Field(() => ModelTagsCountAggregate, {nullable:true})
    _count?: ModelTagsCountAggregate;

    @Field(() => ModelTagsAvgAggregate, {nullable:true})
    _avg?: ModelTagsAvgAggregate;

    @Field(() => ModelTagsSumAggregate, {nullable:true})
    _sum?: ModelTagsSumAggregate;

    @Field(() => ModelTagsMinAggregate, {nullable:true})
    _min?: ModelTagsMinAggregate;

    @Field(() => ModelTagsMaxAggregate, {nullable:true})
    _max?: ModelTagsMaxAggregate;
}
