import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ManufacturerWhereInput } from './manufacturer-where.input';
import { Type } from 'class-transformer';
import { ManufacturerOrderByWithAggregationInput } from './manufacturer-order-by-with-aggregation.input';
import { ManufacturerScalarFieldEnum } from './manufacturer-scalar-field.enum';
import { ManufacturerScalarWhereWithAggregatesInput } from './manufacturer-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ManufacturerCountAggregateInput } from './manufacturer-count-aggregate.input';
import { ManufacturerAvgAggregateInput } from './manufacturer-avg-aggregate.input';
import { ManufacturerSumAggregateInput } from './manufacturer-sum-aggregate.input';
import { ManufacturerMinAggregateInput } from './manufacturer-min-aggregate.input';
import { ManufacturerMaxAggregateInput } from './manufacturer-max-aggregate.input';

@ArgsType()
export class ManufacturerGroupByArgs {

    @Field(() => ManufacturerWhereInput, {nullable:true})
    @Type(() => ManufacturerWhereInput)
    where?: ManufacturerWhereInput;

    @Field(() => [ManufacturerOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ManufacturerOrderByWithAggregationInput>;

    @Field(() => [ManufacturerScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ManufacturerScalarFieldEnum>;

    @Field(() => ManufacturerScalarWhereWithAggregatesInput, {nullable:true})
    having?: ManufacturerScalarWhereWithAggregatesInput;

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
