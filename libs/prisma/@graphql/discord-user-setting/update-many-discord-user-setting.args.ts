import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DiscordUserSettingUpdateManyMutationInput } from './discord-user-setting-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DiscordUserSettingWhereInput } from './discord-user-setting-where.input';

@ArgsType()
export class UpdateManyDiscordUserSettingArgs {

    @Field(() => DiscordUserSettingUpdateManyMutationInput, {nullable:false})
    @Type(() => DiscordUserSettingUpdateManyMutationInput)
    data!: DiscordUserSettingUpdateManyMutationInput;

    @Field(() => DiscordUserSettingWhereInput, {nullable:true})
    @Type(() => DiscordUserSettingWhereInput)
    where?: DiscordUserSettingWhereInput;
}
