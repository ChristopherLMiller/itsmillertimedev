import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GalleryImageWhereInput } from './gallery-image-where.input';
import { Type } from 'class-transformer';
import { GalleryImageOrderByWithAggregationInput } from './gallery-image-order-by-with-aggregation.input';
import { GalleryImageScalarFieldEnum } from './gallery-image-scalar-field.enum';
import { GalleryImageScalarWhereWithAggregatesInput } from './gallery-image-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { GalleryImageCountAggregateInput } from './gallery-image-count-aggregate.input';
import { GalleryImageAvgAggregateInput } from './gallery-image-avg-aggregate.input';
import { GalleryImageSumAggregateInput } from './gallery-image-sum-aggregate.input';
import { GalleryImageMinAggregateInput } from './gallery-image-min-aggregate.input';
import { GalleryImageMaxAggregateInput } from './gallery-image-max-aggregate.input';

@ArgsType()
export class GalleryImageGroupByArgs {

    @Field(() => GalleryImageWhereInput, {nullable:true})
    @Type(() => GalleryImageWhereInput)
    where?: GalleryImageWhereInput;

    @Field(() => [GalleryImageOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<GalleryImageOrderByWithAggregationInput>;

    @Field(() => [GalleryImageScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof GalleryImageScalarFieldEnum>;

    @Field(() => GalleryImageScalarWhereWithAggregatesInput, {nullable:true})
    having?: GalleryImageScalarWhereWithAggregatesInput;

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
