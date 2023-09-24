import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PermissionsToRolesUncheckedUpdateManyWithoutRoleNestedInput } from '../permissions-to-roles/permissions-to-roles-unchecked-update-many-without-role-nested.input';

@InputType()
export class RoleUncheckedUpdateWithoutUserInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => PermissionsToRolesUncheckedUpdateManyWithoutRoleNestedInput, {nullable:true})
    permissions?: PermissionsToRolesUncheckedUpdateManyWithoutRoleNestedInput;
}
