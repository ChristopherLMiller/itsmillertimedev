import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SessionMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    sid?: true;

    @Field(() => Boolean, {nullable:true})
    data?: true;

    @Field(() => Boolean, {nullable:true})
    expiresAt?: true;
}
