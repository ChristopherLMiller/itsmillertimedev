import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Visibility } from '../prisma/visibility.enum';
import { ModelCountAggregate } from './model-count-aggregate.output';
import { ModelAvgAggregate } from './model-avg-aggregate.output';
import { ModelSumAggregate } from './model-sum-aggregate.output';
import { ModelMinAggregate } from './model-min-aggregate.output';
import { ModelMaxAggregate } from './model-max-aggregate.output';

@ObjectType()
export class ModelGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => Boolean, {nullable:false})
    completed!: boolean;

    @Field(() => Visibility, {nullable:false})
    visibility!: keyof typeof Visibility;

    @Field(() => String, {nullable:false})
    metaTitle!: string;

    @Field(() => String, {nullable:false})
    summary!: string;

    @Field(() => String, {nullable:false})
    featuredImage!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:true})
    clockifyProjectId?: string;

    @Field(() => String, {nullable:false})
    contents!: string;

    @Field(() => Int, {nullable:false})
    yearReleased!: number;

    @Field(() => Date, {nullable:false})
    completedAt!: Date | string;

    @Field(() => String, {nullable:false})
    imagePublic_id!: string;

    @Field(() => Int, {nullable:false})
    manufacturerId!: number;

    @Field(() => Int, {nullable:false})
    scaleId!: number;

    @Field(() => ModelCountAggregate, {nullable:true})
    _count?: ModelCountAggregate;

    @Field(() => ModelAvgAggregate, {nullable:true})
    _avg?: ModelAvgAggregate;

    @Field(() => ModelSumAggregate, {nullable:true})
    _sum?: ModelSumAggregate;

    @Field(() => ModelMinAggregate, {nullable:true})
    _min?: ModelMinAggregate;

    @Field(() => ModelMaxAggregate, {nullable:true})
    _max?: ModelMaxAggregate;
}
