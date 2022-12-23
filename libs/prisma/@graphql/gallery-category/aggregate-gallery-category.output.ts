import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GalleryCategoryCountAggregate } from './gallery-category-count-aggregate.output';
import { GalleryCategoryAvgAggregate } from './gallery-category-avg-aggregate.output';
import { GalleryCategorySumAggregate } from './gallery-category-sum-aggregate.output';
import { GalleryCategoryMinAggregate } from './gallery-category-min-aggregate.output';
import { GalleryCategoryMaxAggregate } from './gallery-category-max-aggregate.output';

@ObjectType()
export class AggregateGalleryCategory {

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
