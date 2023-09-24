import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    supabaseId!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => Int, {nullable:false})
    roleId!: number;

    @Field(() => GraphQLJSON, {nullable:true})
    meta?: any;
}
