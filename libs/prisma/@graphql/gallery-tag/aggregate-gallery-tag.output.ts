import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GalleryTagCountAggregate } from './gallery-tag-count-aggregate.output';
import { GalleryTagAvgAggregate } from './gallery-tag-avg-aggregate.output';
import { GalleryTagSumAggregate } from './gallery-tag-sum-aggregate.output';
import { GalleryTagMinAggregate } from './gallery-tag-min-aggregate.output';
import { GalleryTagMaxAggregate } from './gallery-tag-max-aggregate.output';

@ObjectType()
export class AggregateGalleryTag {

    @Field(() => GalleryTagCountAggregate, {nullable:true})
    _count?: GalleryTagCountAggregate;

    @Field(() => GalleryTagAvgAggregate, {nullable:true})
    _avg?: GalleryTagAvgAggregate;

    @Field(() => GalleryTagSumAggregate, {nullable:true})
    _sum?: GalleryTagSumAggregate;

    @Field(() => GalleryTagMinAggregate, {nullable:true})
    _min?: GalleryTagMinAggregate;

    @Field(() => GalleryTagMaxAggregate, {nullable:true})
    _max?: GalleryTagMaxAggregate;
}
