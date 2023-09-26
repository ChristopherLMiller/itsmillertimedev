import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DiscordUserSettingWhereInput } from './discord-user-setting-where.input';
import { Type } from 'class-transformer';
import { DiscordUserSettingOrderByWithRelationInput } from './discord-user-setting-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DiscordUserSettingWhereUniqueInput } from './discord-user-setting-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DiscordUserSettingCountAggregateInput } from './discord-user-setting-count-aggregate.input';
import { DiscordUserSettingMinAggregateInput } from './discord-user-setting-min-aggregate.input';
import { DiscordUserSettingMaxAggregateInput } from './discord-user-setting-max-aggregate.input';

@ArgsType()
export class DiscordUserSettingAggregateArgs {

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

    @Field(() => DiscordUserSettingCountAggregateInput, {nullable:true})
    _count?: DiscordUserSettingCountAggregateInput;

    @Field(() => DiscordUserSettingMinAggregateInput, {nullable:true})
    _min?: DiscordUserSettingMinAggregateInput;

    @Field(() => DiscordUserSettingMaxAggregateInput, {nullable:true})
    _max?: DiscordUserSettingMaxAggregateInput;
}
