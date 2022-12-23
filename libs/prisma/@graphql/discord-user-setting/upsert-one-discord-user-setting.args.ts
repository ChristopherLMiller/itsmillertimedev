import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DiscordUserSettingWhereUniqueInput } from './discord-user-setting-where-unique.input';
import { Type } from 'class-transformer';
import { DiscordUserSettingCreateInput } from './discord-user-setting-create.input';
import { DiscordUserSettingUpdateInput } from './discord-user-setting-update.input';

@ArgsType()
export class UpsertOneDiscordUserSettingArgs {

    @Field(() => DiscordUserSettingWhereUniqueInput, {nullable:false})
    @Type(() => DiscordUserSettingWhereUniqueInput)
    where!: DiscordUserSettingWhereUniqueInput;

    @Field(() => DiscordUserSettingCreateInput, {nullable:false})
    @Type(() => DiscordUserSettingCreateInput)
    create!: DiscordUserSettingCreateInput;

    @Field(() => DiscordUserSettingUpdateInput, {nullable:false})
    @Type(() => DiscordUserSettingUpdateInput)
    update!: DiscordUserSettingUpdateInput;
}
