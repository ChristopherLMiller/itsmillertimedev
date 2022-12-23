import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DiscordUserSettingCountAggregate {

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    meta!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
