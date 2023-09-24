import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateNestedOneWithoutPermissionsInput } from '../role/role-create-nested-one-without-permissions.input';
import { PermissionCreateNestedOneWithoutRolesInput } from '../permission/permission-create-nested-one-without-roles.input';

@InputType()
export class PermissionsToRolesCreateInput {

    @Field(() => RoleCreateNestedOneWithoutPermissionsInput, {nullable:false})
    Role!: RoleCreateNestedOneWithoutPermissionsInput;

    @Field(() => PermissionCreateNestedOneWithoutRolesInput, {nullable:false})
    Permission!: PermissionCreateNestedOneWithoutRolesInput;
}
