import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class DiscordUserSettingUncheckedCreateInput {

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    meta!: any;
}
