import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScaleWhereInput } from './scale-where.input';
import { Type } from 'class-transformer';
import { ScaleOrderByWithRelationInput } from './scale-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ScaleWhereUniqueInput } from './scale-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ScaleCountAggregateInput } from './scale-count-aggregate.input';
import { ScaleAvgAggregateInput } from './scale-avg-aggregate.input';
import { ScaleSumAggregateInput } from './scale-sum-aggregate.input';
import { ScaleMinAggregateInput } from './scale-min-aggregate.input';
import { ScaleMaxAggregateInput } from './scale-max-aggregate.input';

@ArgsType()
export class ScaleAggregateArgs {

    @Field(() => ScaleWhereInput, {nullable:true})
    @Type(() => ScaleWhereInput)
    where?: ScaleWhereInput;

    @Field(() => [ScaleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ScaleOrderByWithRelationInput>;

    @Field(() => ScaleWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ScaleWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ScaleCountAggregateInput, {nullable:true})
    _count?: ScaleCountAggregateInput;

    @Field(() => ScaleAvgAggregateInput, {nullable:true})
    _avg?: ScaleAvgAggregateInput;

    @Field(() => ScaleSumAggregateInput, {nullable:true})
    _sum?: ScaleSumAggregateInput;

    @Field(() => ScaleMinAggregateInput, {nullable:true})
    _min?: ScaleMinAggregateInput;

    @Field(() => ScaleMaxAggregateInput, {nullable:true})
    _max?: ScaleMaxAggregateInput;
}
