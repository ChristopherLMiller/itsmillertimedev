import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    supabaseId?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => Int, {nullable:true})
    roleId?: number;
}
