import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DiscordUserSettingWhereUniqueInput } from './discord-user-setting-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueDiscordUserSettingArgs {

    @Field(() => DiscordUserSettingWhereUniqueInput, {nullable:false})
    @Type(() => DiscordUserSettingWhereUniqueInput)
    where!: DiscordUserSettingWhereUniqueInput;
}
