import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GalleryCategoryWhereInput } from '../gallery-category/gallery-category-where.input';
import { Type } from 'class-transformer';
import { GalleryCategoryOrderByWithRelationInput } from '../gallery-category/gallery-category-order-by-with-relation.input';
import { GalleryCategoryWhereUniqueInput } from '../gallery-category/gallery-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GalleryCategoryCountAggregateInput } from '../gallery-category/gallery-category-count-aggregate.input';
import { GalleryCategoryAvgAggregateInput } from '../gallery-category/gallery-category-avg-aggregate.input';
import { GalleryCategorySumAggregateInput } from '../gallery-category/gallery-category-sum-aggregate.input';
import { GalleryCategoryMinAggregateInput } from '../gallery-category/gallery-category-min-aggregate.input';
import { GalleryCategoryMaxAggregateInput } from '../gallery-category/gallery-category-max-aggregate.input';

@ArgsType()
export class GalleryCategoryAggregateArgs {

    @Field(() => GalleryCategoryWhereInput, {nullable:true})
    @Type(() => GalleryCategoryWhereInput)
    where?: GalleryCategoryWhereInput;

    @Field(() => [GalleryCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GalleryCategoryOrderByWithRelationInput>;

    @Field(() => GalleryCategoryWhereUniqueInput, {nullable:true})
    cursor?: GalleryCategoryWhereUniqueInput;

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
