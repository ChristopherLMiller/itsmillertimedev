import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DiscordUserSettingCreateInput } from './discord-user-setting-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDiscordUserSettingArgs {

    @Field(() => DiscordUserSettingCreateInput, {nullable:false})
    @Type(() => DiscordUserSettingCreateInput)
    data!: DiscordUserSettingCreateInput;
}
