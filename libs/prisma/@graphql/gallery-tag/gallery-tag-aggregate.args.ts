import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GalleryTagWhereInput } from './gallery-tag-where.input';
import { Type } from 'class-transformer';
import { GalleryTagOrderByWithRelationInput } from './gallery-tag-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { GalleryTagWhereUniqueInput } from './gallery-tag-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GalleryTagCountAggregateInput } from './gallery-tag-count-aggregate.input';
import { GalleryTagAvgAggregateInput } from './gallery-tag-avg-aggregate.input';
import { GalleryTagSumAggregateInput } from './gallery-tag-sum-aggregate.input';
import { GalleryTagMinAggregateInput } from './gallery-tag-min-aggregate.input';
import { GalleryTagMaxAggregateInput } from './gallery-tag-max-aggregate.input';

@ArgsType()
export class GalleryTagAggregateArgs {

    @Field(() => GalleryTagWhereInput, {nullable:true})
    @Type(() => GalleryTagWhereInput)
    where?: GalleryTagWhereInput;

    @Field(() => [GalleryTagOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GalleryTagOrderByWithRelationInput>;

    @Field(() => GalleryTagWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<GalleryTagWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GalleryTagCountAggregateInput, {nullable:true})
    _count?: GalleryTagCountAggregateInput;

    @Field(() => GalleryTagAvgAggregateInput, {nullable:true})
    _avg?: GalleryTagAvgAggregateInput;

    @Field(() => GalleryTagSumAggregateInput, {nullable:true})
    _sum?: GalleryTagSumAggregateInput;

    @Field(() => GalleryTagMinAggregateInput, {nullable:true})
    _min?: GalleryTagMinAggregateInput;

    @Field(() => GalleryTagMaxAggregateInput, {nullable:true})
    _max?: GalleryTagMaxAggregateInput;
}
