import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DiscordUserSettingCountAggregate } from './discord-user-setting-count-aggregate.output';
import { DiscordUserSettingMinAggregate } from './discord-user-setting-min-aggregate.output';
import { DiscordUserSettingMaxAggregate } from './discord-user-setting-max-aggregate.output';

@ObjectType()
export class AggregateDiscordUserSetting {

    @Field(() => DiscordUserSettingCountAggregate, {nullable:true})
    _count?: DiscordUserSettingCountAggregate;

    @Field(() => DiscordUserSettingMinAggregate, {nullable:true})
    _min?: DiscordUserSettingMinAggregate;

    @Field(() => DiscordUserSettingMaxAggregate, {nullable:true})
    _max?: DiscordUserSettingMaxAggregate;
}
