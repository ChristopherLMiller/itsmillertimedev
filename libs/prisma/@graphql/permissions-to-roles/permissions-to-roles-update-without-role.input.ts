import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionUpdateOneRequiredWithoutRolesNestedInput } from '../permission/permission-update-one-required-without-roles-nested.input';

@InputType()
export class PermissionsToRolesUpdateWithoutRoleInput {

    @Field(() => PermissionUpdateOneRequiredWithoutRolesNestedInput, {nullable:true})
    Permission?: PermissionUpdateOneRequiredWithoutRolesNestedInput;
}
