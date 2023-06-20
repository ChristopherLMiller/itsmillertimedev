import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SettingsWhereInput } from './settings-where.input';
import { Type } from 'class-transformer';
import { SettingsOrderByWithAggregationInput } from './settings-order-by-with-aggregation.input';
import { SettingsScalarFieldEnum } from './settings-scalar-field.enum';
import { SettingsScalarWhereWithAggregatesInput } from './settings-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SettingsCountAggregateInput } from './settings-count-aggregate.input';
import { SettingsAvgAggregateInput } from './settings-avg-aggregate.input';
import { SettingsSumAggregateInput } from './settings-sum-aggregate.input';
import { SettingsMinAggregateInput } from './settings-min-aggregate.input';
import { SettingsMaxAggregateInput } from './settings-max-aggregate.input';

@ArgsType()
export class SettingsGroupByArgs {

    @Field(() => SettingsWhereInput, {nullable:true})
    @Type(() => SettingsWhereInput)
    where?: SettingsWhereInput;

    @Field(() => [SettingsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SettingsOrderByWithAggregationInput>;

    @Field(() => [SettingsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SettingsScalarFieldEnum>;

    @Field(() => SettingsScalarWhereWithAggregatesInput, {nullable:true})
    having?: SettingsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SettingsCountAggregateInput, {nullable:true})
    _count?: SettingsCountAggregateInput;

    @Field(() => SettingsAvgAggregateInput, {nullable:true})
    _avg?: SettingsAvgAggregateInput;

    @Field(() => SettingsSumAggregateInput, {nullable:true})
    _sum?: SettingsSumAggregateInput;

    @Field(() => SettingsMinAggregateInput, {nullable:true})
    _min?: SettingsMinAggregateInput;

    @Field(() => SettingsMaxAggregateInput, {nullable:true})
    _max?: SettingsMaxAggregateInput;
}
