import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DiscordUserSettingCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    meta?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
