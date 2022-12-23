import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { JsonWithAggregatesFilter } from '../prisma/json-with-aggregates-filter.input';

@InputType()
export class DiscordUserSettingScalarWhereWithAggregatesInput {

    @Field(() => [DiscordUserSettingScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DiscordUserSettingScalarWhereWithAggregatesInput>;

    @Field(() => [DiscordUserSettingScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DiscordUserSettingScalarWhereWithAggregatesInput>;

    @Field(() => [DiscordUserSettingScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DiscordUserSettingScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    meta?: JsonWithAggregatesFilter;
}
