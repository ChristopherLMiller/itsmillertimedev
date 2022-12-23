import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DiscordUserSettingCreateManyInput } from './discord-user-setting-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDiscordUserSettingArgs {

    @Field(() => [DiscordUserSettingCreateManyInput], {nullable:false})
    @Type(() => DiscordUserSettingCreateManyInput)
    data!: Array<DiscordUserSettingCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
