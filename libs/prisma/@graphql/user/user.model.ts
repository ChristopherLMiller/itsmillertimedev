import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Role } from '../role/role.model';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    supabaseId!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => Int, {nullable:false})
    roleId!: number;

    @Field(() => GraphQLJSON, {nullable:true})
    meta!: any | null;

    @Field(() => Role, {nullable:false})
    role?: Role;
}
