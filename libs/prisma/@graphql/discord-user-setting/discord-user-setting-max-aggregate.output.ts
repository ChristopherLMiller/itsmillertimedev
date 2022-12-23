import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DiscordUserSettingMaxAggregate {

    @Field(() => String, {nullable:true})
    userId?: string;
}
