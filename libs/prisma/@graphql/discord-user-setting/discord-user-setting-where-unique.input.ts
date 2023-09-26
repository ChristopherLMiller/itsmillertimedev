import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DiscordUserSettingWhereInput } from './discord-user-setting-where.input';
import { JsonFilter } from '../prisma/json-filter.input';

@InputType()
export class DiscordUserSettingWhereUniqueInput {

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => [DiscordUserSettingWhereInput], {nullable:true})
    AND?: Array<DiscordUserSettingWhereInput>;

    @Field(() => [DiscordUserSettingWhereInput], {nullable:true})
    OR?: Array<DiscordUserSettingWhereInput>;

    @Field(() => [DiscordUserSettingWhereInput], {nullable:true})
    NOT?: Array<DiscordUserSettingWhereInput>;

    @Field(() => JsonFilter, {nullable:true})
    meta?: JsonFilter;
}
