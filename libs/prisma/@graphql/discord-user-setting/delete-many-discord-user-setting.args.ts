import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DiscordUserSettingWhereInput } from './discord-user-setting-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDiscordUserSettingArgs {

    @Field(() => DiscordUserSettingWhereInput, {nullable:true})
    @Type(() => DiscordUserSettingWhereInput)
    where?: DiscordUserSettingWhereInput;
}
