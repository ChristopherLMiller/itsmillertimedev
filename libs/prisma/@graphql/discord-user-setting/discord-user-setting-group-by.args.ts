import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DiscordUserSettingWhereInput } from './discord-user-setting-where.input';
import { Type } from 'class-transformer';
import { DiscordUserSettingOrderByWithAggregationInput } from './discord-user-setting-order-by-with-aggregation.input';
import { DiscordUserSettingScalarFieldEnum } from './discord-user-setting-scalar-field.enum';
import { DiscordUserSettingScalarWhereWithAggregatesInput } from './discord-user-setting-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DiscordUserSettingCountAggregateInput } from './discord-user-setting-count-aggregate.input';
import { DiscordUserSettingMinAggregateInput } from './discord-user-setting-min-aggregate.input';
import { DiscordUserSettingMaxAggregateInput } from './discord-user-setting-max-aggregate.input';

@ArgsType()
export class DiscordUserSettingGroupByArgs {

    @Field(() => DiscordUserSettingWhereInput, {nullable:true})
    @Type(() => DiscordUserSettingWhereInput)
    where?: DiscordUserSettingWhereInput;

    @Field(() => [DiscordUserSettingOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DiscordUserSettingOrderByWithAggregationInput>;

    @Field(() => [DiscordUserSettingScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DiscordUserSettingScalarFieldEnum>;

    @Field(() => DiscordUserSettingScalarWhereWithAggregatesInput, {nullable:true})
    having?: DiscordUserSettingScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DiscordUserSettingCountAggregateInput, {nullable:true})
    _count?: DiscordUserSettingCountAggregateInput;

    @Field(() => DiscordUserSettingMinAggregateInput, {nullable:true})
    _min?: DiscordUserSettingMinAggregateInput;

    @Field(() => DiscordUserSettingMaxAggregateInput, {nullable:true})
    _max?: DiscordUserSettingMaxAggregateInput;
}
