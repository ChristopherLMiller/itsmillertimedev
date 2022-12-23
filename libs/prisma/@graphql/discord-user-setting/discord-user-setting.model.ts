import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@ObjectType()
export class DiscordUserSetting {

    @Field(() => ID, {nullable:false})
    userId!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    meta!: any;
}
