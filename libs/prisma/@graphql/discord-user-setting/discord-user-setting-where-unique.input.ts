import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DiscordUserSettingWhereUniqueInput {

    @Field(() => String, {nullable:true})
    userId?: string;
}
