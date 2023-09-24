import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleUpdateOneRequiredWithoutPermissionsNestedInput } from '../role/role-update-one-required-without-permissions-nested.input';
import { PermissionUpdateOneRequiredWithoutRolesNestedInput } from '../permission/permission-update-one-required-without-roles-nested.input';

@InputType()
export class PermissionsToRolesUpdateInput {

    @Field(() => RoleUpdateOneRequiredWithoutPermissionsNestedInput, {nullable:true})
    Role?: RoleUpdateOneRequiredWithoutPermissionsNestedInput;

    @Field(() => PermissionUpdateOneRequiredWithoutRolesNestedInput, {nullable:true})
    Permission?: PermissionUpdateOneRequiredWithoutRolesNestedInput;
}
