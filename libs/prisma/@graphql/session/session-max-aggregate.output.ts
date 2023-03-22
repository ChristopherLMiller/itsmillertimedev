import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SessionMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    sid?: string;

    @Field(() => String, {nullable:true})
    data?: string;

    @Field(() => Date, {nullable:true})
    expiresAt?: Date | string;
}
