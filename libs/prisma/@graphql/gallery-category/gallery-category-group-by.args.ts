import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GalleryCategoryWhereInput } from './gallery-category-where.input';
import { Type } from 'class-transformer';
import { GalleryCategoryOrderByWithAggregationInput } from './gallery-category-order-by-with-aggregation.input';
import { GalleryCategoryScalarFieldEnum } from './gallery-category-scalar-field.enum';
import { GalleryCategoryScalarWhereWithAggregatesInput } from './gallery-category-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { GalleryCategoryCountAggregateInput } from './gallery-category-count-aggregate.input';
import { GalleryCategoryAvgAggregateInput } from './gallery-category-avg-aggregate.input';
import { GalleryCategorySumAggregateInput } from './gallery-category-sum-aggregate.input';
import { GalleryCategoryMinAggregateInput } from './gallery-category-min-aggregate.input';
import { GalleryCategoryMaxAggregateInput } from './gallery-category-max-aggregate.input';

@ArgsType()
export class GalleryCategoryGroupByArgs {

    @Field(() => GalleryCategoryWhereInput, {nullable:true})
    @Type(() => GalleryCategoryWhereInput)
    where?: GalleryCategoryWhereInput;

    @Field(() => [GalleryCategoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<GalleryCategoryOrderByWithAggregationInput>;

    @Field(() => [GalleryCategoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof GalleryCategoryScalarFieldEnum>;

    @Field(() => GalleryCategoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: GalleryCategoryScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GalleryCategoryCountAggregateInput, {nullable:true})
    _count?: GalleryCategoryCountAggregateInput;

    @Field(() => GalleryCategoryAvgAggregateInput, {nullable:true})
    _avg?: GalleryCategoryAvgAggregateInput;

    @Field(() => GalleryCategorySumAggregateInput, {nullable:true})
    _sum?: GalleryCategorySumAggregateInput;

    @Field(() => GalleryCategoryMinAggregateInput, {nullable:true})
    _min?: GalleryCategoryMinAggregateInput;

    @Field(() => GalleryCategoryMaxAggregateInput, {nullable:true})
    _max?: GalleryCategoryMaxAggregateInput;
}
