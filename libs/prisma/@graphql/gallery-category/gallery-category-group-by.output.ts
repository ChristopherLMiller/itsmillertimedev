import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GalleryCategoryCountAggregate } from './gallery-category-count-aggregate.output';
import { GalleryCategoryAvgAggregate } from './gallery-category-avg-aggregate.output';
import { GalleryCategorySumAggregate } from './gallery-category-sum-aggregate.output';
import { GalleryCategoryMinAggregate } from './gallery-category-min-aggregate.output';
import { GalleryCategoryMaxAggregate } from './gallery-category-max-aggregate.output';

@ObjectType()
export class GalleryCategoryGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => Int, {nullable:true})
    galleryId?: number;

    @Field(() => GalleryCategoryCountAggregate, {nullable:true})
    _count?: GalleryCategoryCountAggregate;

    @Field(() => GalleryCategoryAvgAggregate, {nullable:true})
    _avg?: GalleryCategoryAvgAggregate;

    @Field(() => GalleryCategorySumAggregate, {nullable:true})
    _sum?: GalleryCategorySumAggregate;

    @Field(() => GalleryCategoryMinAggregate, {nullable:true})
    _min?: GalleryCategoryMinAggregate;

    @Field(() => GalleryCategoryMaxAggregate, {nullable:true})
    _max?: GalleryCategoryMaxAggregate;
}
