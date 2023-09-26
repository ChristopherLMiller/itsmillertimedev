import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DiscordUserSettingWhereUniqueInput } from './discord-user-setting-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneDiscordUserSettingArgs {

    @Field(() => DiscordUserSettingWhereUniqueInput, {nullable:false})
    @Type(() => DiscordUserSettingWhereUniqueInput)
    where!: Prisma.AtLeast<DiscordUserSettingWhereUniqueInput, 'userId'>;
}
