import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GalleryWhereInput } from './gallery-where.input';
import { Type } from 'class-transformer';
import { GalleryOrderByWithRelationInput } from './gallery-order-by-with-relation.input';
import { GalleryWhereUniqueInput } from './gallery-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GalleryCountAggregateInput } from './gallery-count-aggregate.input';
import { GalleryAvgAggregateInput } from './gallery-avg-aggregate.input';
import { GallerySumAggregateInput } from './gallery-sum-aggregate.input';
import { GalleryMinAggregateInput } from './gallery-min-aggregate.input';
import { GalleryMaxAggregateInput } from './gallery-max-aggregate.input';

@ArgsType()
export class GalleryAggregateArgs {

    @Field(() => GalleryWhereInput, {nullable:true})
    @Type(() => GalleryWhereInput)
    where?: GalleryWhereInput;

    @Field(() => [GalleryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GalleryOrderByWithRelationInput>;

    @Field(() => GalleryWhereUniqueInput, {nullable:true})
    cursor?: GalleryWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GalleryCountAggregateInput, {nullable:true})
    _count?: GalleryCountAggregateInput;

    @Field(() => GalleryAvgAggregateInput, {nullable:true})
    _avg?: GalleryAvgAggregateInput;

    @Field(() => GallerySumAggregateInput, {nullable:true})
    _sum?: GallerySumAggregateInput;

    @Field(() => GalleryMinAggregateInput, {nullable:true})
    _min?: GalleryMinAggregateInput;

    @Field(() => GalleryMaxAggregateInput, {nullable:true})
    _max?: GalleryMaxAggregateInput;
}
