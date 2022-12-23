import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DiscordUserSettingCountOrderByAggregateInput } from './discord-user-setting-count-order-by-aggregate.input';
import { DiscordUserSettingMaxOrderByAggregateInput } from './discord-user-setting-max-order-by-aggregate.input';
import { DiscordUserSettingMinOrderByAggregateInput } from './discord-user-setting-min-order-by-aggregate.input';

@InputType()
export class DiscordUserSettingOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    meta?: keyof typeof SortOrder;

    @Field(() => DiscordUserSettingCountOrderByAggregateInput, {nullable:true})
    _count?: DiscordUserSettingCountOrderByAggregateInput;

    @Field(() => DiscordUserSettingMaxOrderByAggregateInput, {nullable:true})
    _max?: DiscordUserSettingMaxOrderByAggregateInput;

    @Field(() => DiscordUserSettingMinOrderByAggregateInput, {nullable:true})
    _min?: DiscordUserSettingMinOrderByAggregateInput;
}
