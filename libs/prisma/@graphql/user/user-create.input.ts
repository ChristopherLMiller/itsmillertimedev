import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { RoleCreateNestedOneWithoutUserInput } from '../role/role-create-nested-one-without-user.input';

@InputType()
export class UserCreateInput {

    @Field(() => String, {nullable:false})
    supabaseId!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    meta?: any;

    @Field(() => RoleCreateNestedOneWithoutUserInput, {nullable:false})
    role!: RoleCreateNestedOneWithoutUserInput;
}
