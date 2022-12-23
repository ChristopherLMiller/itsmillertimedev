import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GalleryCountAggregate } from './gallery-count-aggregate.output';
import { GalleryAvgAggregate } from './gallery-avg-aggregate.output';
import { GallerySumAggregate } from './gallery-sum-aggregate.output';
import { GalleryMinAggregate } from './gallery-min-aggregate.output';
import { GalleryMaxAggregate } from './gallery-max-aggregate.output';

@ObjectType()
export class AggregateGallery {

    @Field(() => GalleryCountAggregate, {nullable:true})
    _count?: GalleryCountAggregate;

    @Field(() => GalleryAvgAggregate, {nullable:true})
    _avg?: GalleryAvgAggregate;

    @Field(() => GallerySumAggregate, {nullable:true})
    _sum?: GallerySumAggregate;

    @Field(() => GalleryMinAggregate, {nullable:true})
    _min?: GalleryMinAggregate;

    @Field(() => GalleryMaxAggregate, {nullable:true})
    _max?: GalleryMaxAggregate;
}
