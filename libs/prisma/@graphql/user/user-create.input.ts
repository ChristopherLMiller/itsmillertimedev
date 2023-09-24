import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateNestedOneWithoutUserInput } from '../role/role-create-nested-one-without-user.input';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class UserCreateInput {

    @Field(() => String, {nullable:false})
    supabaseId!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => RoleCreateNestedOneWithoutUserInput, {nullable:false})
    role!: RoleCreateNestedOneWithoutUserInput;

    @Field(() => GraphQLJSON, {nullable:true})
    meta?: any;
}
