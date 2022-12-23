import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GalleryTagWhereInput } from './gallery-tag-where.input';
import { Type } from 'class-transformer';
import { GalleryTagOrderByWithAggregationInput } from './gallery-tag-order-by-with-aggregation.input';
import { GalleryTagScalarFieldEnum } from './gallery-tag-scalar-field.enum';
import { GalleryTagScalarWhereWithAggregatesInput } from './gallery-tag-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { GalleryTagCountAggregateInput } from './gallery-tag-count-aggregate.input';
import { GalleryTagAvgAggregateInput } from './gallery-tag-avg-aggregate.input';
import { GalleryTagSumAggregateInput } from './gallery-tag-sum-aggregate.input';
import { GalleryTagMinAggregateInput } from './gallery-tag-min-aggregate.input';
import { GalleryTagMaxAggregateInput } from './gallery-tag-max-aggregate.input';

@ArgsType()
export class GalleryTagGroupByArgs {

    @Field(() => GalleryTagWhereInput, {nullable:true})
    @Type(() => GalleryTagWhereInput)
    where?: GalleryTagWhereInput;

    @Field(() => [GalleryTagOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<GalleryTagOrderByWithAggregationInput>;

    @Field(() => [GalleryTagScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof GalleryTagScalarFieldEnum>;

    @Field(() => GalleryTagScalarWhereWithAggregatesInput, {nullable:true})
    having?: GalleryTagScalarWhereWithAggregatesInput;

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
