import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PermissionsToRolesUpdateManyWithoutRoleNestedInput } from '../permissions-to-roles/permissions-to-roles-update-many-without-role-nested.input';
import { UserUpdateManyWithoutRoleNestedInput } from '../user/user-update-many-without-role-nested.input';

@InputType()
export class RoleUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => PermissionsToRolesUpdateManyWithoutRoleNestedInput, {nullable:true})
    permissions?: PermissionsToRolesUpdateManyWithoutRoleNestedInput;

    @Field(() => UserUpdateManyWithoutRoleNestedInput, {nullable:true})
    User?: UserUpdateManyWithoutRoleNestedInput;
}
