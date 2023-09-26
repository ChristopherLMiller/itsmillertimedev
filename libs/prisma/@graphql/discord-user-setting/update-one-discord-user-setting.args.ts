import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DiscordUserSettingUpdateInput } from './discord-user-setting-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DiscordUserSettingWhereUniqueInput } from './discord-user-setting-where-unique.input';

@ArgsType()
export class UpdateOneDiscordUserSettingArgs {

    @Field(() => DiscordUserSettingUpdateInput, {nullable:false})
    @Type(() => DiscordUserSettingUpdateInput)
    data!: DiscordUserSettingUpdateInput;

    @Field(() => DiscordUserSettingWhereUniqueInput, {nullable:false})
    @Type(() => DiscordUserSettingWhereUniqueInput)
    where!: Prisma.AtLeast<DiscordUserSettingWhereUniqueInput, 'userId'>;
}
