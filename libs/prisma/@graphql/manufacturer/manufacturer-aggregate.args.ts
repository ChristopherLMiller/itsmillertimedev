import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ManufacturerWhereInput } from './manufacturer-where.input';
import { Type } from 'class-transformer';
import { ManufacturerOrderByWithRelationInput } from './manufacturer-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ManufacturerWhereUniqueInput } from './manufacturer-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ManufacturerCountAggregateInput } from './manufacturer-count-aggregate.input';
import { ManufacturerAvgAggregateInput } from './manufacturer-avg-aggregate.input';
import { ManufacturerSumAggregateInput } from './manufacturer-sum-aggregate.input';
import { ManufacturerMinAggregateInput } from './manufacturer-min-aggregate.input';
import { ManufacturerMaxAggregateInput } from './manufacturer-max-aggregate.input';

@ArgsType()
export class ManufacturerAggregateArgs {

    @Field(() => ManufacturerWhereInput, {nullable:true})
    @Type(() => ManufacturerWhereInput)
    where?: ManufacturerWhereInput;

    @Field(() => [ManufacturerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ManufacturerOrderByWithRelationInput>;

    @Field(() => ManufacturerWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ManufacturerWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ManufacturerCountAggregateInput, {nullable:true})
    _count?: ManufacturerCountAggregateInput;

    @Field(() => ManufacturerAvgAggregateInput, {nullable:true})
    _avg?: ManufacturerAvgAggregateInput;

    @Field(() => ManufacturerSumAggregateInput, {nullable:true})
    _sum?: ManufacturerSumAggregateInput;

    @Field(() => ManufacturerMinAggregateInput, {nullable:true})
    _min?: ManufacturerMinAggregateInput;

    @Field(() => ManufacturerMaxAggregateInput, {nullable:true})
    _max?: ManufacturerMaxAggregateInput;
}
