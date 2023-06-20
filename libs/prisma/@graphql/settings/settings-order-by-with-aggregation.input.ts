import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SettingsCountOrderByAggregateInput } from './settings-count-order-by-aggregate.input';
import { SettingsAvgOrderByAggregateInput } from './settings-avg-order-by-aggregate.input';
import { SettingsMaxOrderByAggregateInput } from './settings-max-order-by-aggregate.input';
import { SettingsMinOrderByAggregateInput } from './settings-min-order-by-aggregate.input';
import { SettingsSumOrderByAggregateInput } from './settings-sum-order-by-aggregate.input';

@InputType()
export class SettingsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    key?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    value?: keyof typeof SortOrder;

    @Field(() => SettingsCountOrderByAggregateInput, {nullable:true})
    _count?: SettingsCountOrderByAggregateInput;

    @Field(() => SettingsAvgOrderByAggregateInput, {nullable:true})
    _avg?: SettingsAvgOrderByAggregateInput;

    @Field(() => SettingsMaxOrderByAggregateInput, {nullable:true})
    _max?: SettingsMaxOrderByAggregateInput;

    @Field(() => SettingsMinOrderByAggregateInput, {nullable:true})
    _min?: SettingsMinOrderByAggregateInput;

    @Field(() => SettingsSumOrderByAggregateInput, {nullable:true})
    _sum?: SettingsSumOrderByAggregateInput;
}
