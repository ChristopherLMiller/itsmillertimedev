import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionsToRolesRoleIdPermissionIdCompoundUniqueInput } from './permissions-to-roles-role-id-permission-id-compound-unique.input';

@InputType()
export class PermissionsToRolesWhereUniqueInput {

    @Field(() => PermissionsToRolesRoleIdPermissionIdCompoundUniqueInput, {nullable:true})
    roleId_permissionId?: PermissionsToRolesRoleIdPermissionIdCompoundUniqueInput;
}
