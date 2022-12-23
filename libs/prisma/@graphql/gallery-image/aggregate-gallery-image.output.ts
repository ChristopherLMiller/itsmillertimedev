import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GalleryImageCountAggregate } from './gallery-image-count-aggregate.output';
import { GalleryImageAvgAggregate } from './gallery-image-avg-aggregate.output';
import { GalleryImageSumAggregate } from './gallery-image-sum-aggregate.output';
import { GalleryImageMinAggregate } from './gallery-image-min-aggregate.output';
import { GalleryImageMaxAggregate } from './gallery-image-max-aggregate.output';

@ObjectType()
export class AggregateGalleryImage {

    @Field(() => GalleryImageCountAggregate, {nullable:true})
    _count?: GalleryImageCountAggregate;

    @Field(() => GalleryImageAvgAggregate, {nullable:true})
    _avg?: GalleryImageAvgAggregate;

    @Field(() => GalleryImageSumAggregate, {nullable:true})
    _sum?: GalleryImageSumAggregate;

    @Field(() => GalleryImageMinAggregate, {nullable:true})
    _min?: GalleryImageMinAggregate;

    @Field(() => GalleryImageMaxAggregate, {nullable:true})
    _max?: GalleryImageMaxAggregate;
}
