import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Visibility } from '../prisma/visibility.enum';
import { GalleryCountAggregate } from './gallery-count-aggregate.output';
import { GalleryAvgAggregate } from './gallery-avg-aggregate.output';
import { GallerySumAggregate } from './gallery-sum-aggregate.output';
import { GalleryMinAggregate } from './gallery-min-aggregate.output';
import { GalleryMaxAggregate } from './gallery-max-aggregate.output';

@ObjectType()
export class GalleryGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    meta!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Visibility, {nullable:false})
    visibility!: keyof typeof Visibility;

    @Field(() => Boolean, {nullable:false})
    isNsfw!: boolean;

    @Field(() => String, {nullable:false})
    image!: string;

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
