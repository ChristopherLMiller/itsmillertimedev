import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GalleryImageWhereInput } from './gallery-image-where.input';
import { Type } from 'class-transformer';
import { GalleryImageOrderByWithRelationInput } from './gallery-image-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { GalleryImageWhereUniqueInput } from './gallery-image-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GalleryImageCountAggregateInput } from './gallery-image-count-aggregate.input';
import { GalleryImageAvgAggregateInput } from './gallery-image-avg-aggregate.input';
import { GalleryImageSumAggregateInput } from './gallery-image-sum-aggregate.input';
import { GalleryImageMinAggregateInput } from './gallery-image-min-aggregate.input';
import { GalleryImageMaxAggregateInput } from './gallery-image-max-aggregate.input';

@ArgsType()
export class GalleryImageAggregateArgs {

    @Field(() => GalleryImageWhereInput, {nullable:true})
    @Type(() => GalleryImageWhereInput)
    where?: GalleryImageWhereInput;

    @Field(() => [GalleryImageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GalleryImageOrderByWithRelationInput>;

    @Field(() => GalleryImageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<GalleryImageWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GalleryImageCountAggregateInput, {nullable:true})
    _count?: GalleryImageCountAggregateInput;

    @Field(() => GalleryImageAvgAggregateInput, {nullable:true})
    _avg?: GalleryImageAvgAggregateInput;

    @Field(() => GalleryImageSumAggregateInput, {nullable:true})
    _sum?: GalleryImageSumAggregateInput;

    @Field(() => GalleryImageMinAggregateInput, {nullable:true})
    _min?: GalleryImageMinAggregateInput;

    @Field(() => GalleryImageMaxAggregateInput, {nullable:true})
    _max?: GalleryImageMaxAggregateInput;
}
