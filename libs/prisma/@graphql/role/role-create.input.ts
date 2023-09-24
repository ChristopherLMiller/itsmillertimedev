import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionsToRolesCreateNestedManyWithoutRoleInput } from '../permissions-to-roles/permissions-to-roles-create-nested-many-without-role.input';
import { UserCreateNestedManyWithoutRoleInput } from '../user/user-create-nested-many-without-role.input';

@InputType()
export class RoleCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => PermissionsToRolesCreateNestedManyWithoutRoleInput, {nullable:true})
    permissions?: PermissionsToRolesCreateNestedManyWithoutRoleInput;

    @Field(() => UserCreateNestedManyWithoutRoleInput, {nullable:true})
    User?: UserCreateNestedManyWithoutRoleInput;
}
