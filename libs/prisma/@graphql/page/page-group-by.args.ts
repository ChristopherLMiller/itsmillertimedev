import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PageWhereInput } from './page-where.input';
import { Type } from 'class-transformer';
import { PageOrderByWithAggregationInput } from './page-order-by-with-aggregation.input';
import { PageScalarFieldEnum } from './page-scalar-field.enum';
import { PageScalarWhereWithAggregatesInput } from './page-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PageCountAggregateInput } from './page-count-aggregate.input';
import { PageAvgAggregateInput } from './page-avg-aggregate.input';
import { PageSumAggregateInput } from './page-sum-aggregate.input';
import { PageMinAggregateInput } from './page-min-aggregate.input';
import { PageMaxAggregateInput } from './page-max-aggregate.input';

@ArgsType()
export class PageGroupByArgs {

    @Field(() => PageWhereInput, {nullable:true})
    @Type(() => PageWhereInput)
    where?: PageWhereInput;

    @Field(() => [PageOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PageOrderByWithAggregationInput>;

    @Field(() => [PageScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PageScalarFieldEnum>;

    @Field(() => PageScalarWhereWithAggregatesInput, {nullable:true})
    having?: PageScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PageCountAggregateInput, {nullable:true})
    _count?: PageCountAggregateInput;

    @Field(() => PageAvgAggregateInput, {nullable:true})
    _avg?: PageAvgAggregateInput;

    @Field(() => PageSumAggregateInput, {nullable:true})
    _sum?: PageSumAggregateInput;

    @Field(() => PageMinAggregateInput, {nullable:true})
    _min?: PageMinAggregateInput;

    @Field(() => PageMaxAggregateInput, {nullable:true})
    _max?: PageMaxAggregateInput;
}
