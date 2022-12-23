import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';

@InputType()
export class DiscordUserSettingWhereInput {

    @Field(() => [DiscordUserSettingWhereInput], {nullable:true})
    AND?: Array<DiscordUserSettingWhereInput>;

    @Field(() => [DiscordUserSettingWhereInput], {nullable:true})
    OR?: Array<DiscordUserSettingWhereInput>;

    @Field(() => [DiscordUserSettingWhereInput], {nullable:true})
    NOT?: Array<DiscordUserSettingWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => JsonFilter, {nullable:true})
    meta?: JsonFilter;
}
