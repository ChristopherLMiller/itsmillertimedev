import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleUpdateOneRequiredWithoutPermissionsNestedInput } from '../role/role-update-one-required-without-permissions-nested.input';

@InputType()
export class PermissionsToRolesUpdateWithoutPermissionInput {

    @Field(() => RoleUpdateOneRequiredWithoutPermissionsNestedInput, {nullable:true})
    Role?: RoleUpdateOneRequiredWithoutPermissionsNestedInput;
}
