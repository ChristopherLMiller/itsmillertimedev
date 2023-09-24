import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PermissionsToRolesUncheckedUpdateManyWithoutRoleNestedInput } from '../permissions-to-roles/permissions-to-roles-unchecked-update-many-without-role-nested.input';
import { UserUncheckedUpdateManyWithoutRoleNestedInput } from '../user/user-unchecked-update-many-without-role-nested.input';

@InputType()
export class RoleUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => PermissionsToRolesUncheckedUpdateManyWithoutRoleNestedInput, {nullable:true})
    permissions?: PermissionsToRolesUncheckedUpdateManyWithoutRoleNestedInput;

    @Field(() => UserUncheckedUpdateManyWithoutRoleNestedInput, {nullable:true})
    User?: UserUncheckedUpdateManyWithoutRoleNestedInput;
}
