import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionsToRolesWhereInput } from './permissions-to-roles-where.input';

@InputType()
export class PermissionsToRolesListRelationFilter {

    @Field(() => PermissionsToRolesWhereInput, {nullable:true})
    every?: PermissionsToRolesWhereInput;

    @Field(() => PermissionsToRolesWhereInput, {nullable:true})
    some?: PermissionsToRolesWhereInput;

    @Field(() => PermissionsToRolesWhereInput, {nullable:true})
    none?: PermissionsToRolesWhereInput;
}
