import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DiscordUserSettingWhereInput } from './discord-user-setting-where.input';
import { Type } from 'class-transformer';
import { DiscordUserSettingOrderByWithRelationInput } from './discord-user-setting-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DiscordUserSettingWhereUniqueInput } from './discord-user-setting-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DiscordUserSettingScalarFieldEnum } from './discord-user-setting-scalar-field.enum';

@ArgsType()
export class FindFirstDiscordUserSettingOrThrowArgs {

    @Field(() => DiscordUserSettingWhereInput, {nullable:true})
    @Type(() => DiscordUserSettingWhereInput)
    where?: DiscordUserSettingWhereInput;

    @Field(() => [DiscordUserSettingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DiscordUserSettingOrderByWithRelationInput>;

    @Field(() => DiscordUserSettingWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DiscordUserSettingWhereUniqueInput, 'userId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DiscordUserSettingScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DiscordUserSettingScalarFieldEnum>;
}
