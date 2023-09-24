import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PermissionsToRolesUncheckedUpdateManyWithoutPermissionNestedInput } from '../permissions-to-roles/permissions-to-roles-unchecked-update-many-without-permission-nested.input';

@InputType()
export class PermissionUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    node?: StringFieldUpdateOperationsInput;

    @Field(() => PermissionsToRolesUncheckedUpdateManyWithoutPermissionNestedInput, {nullable:true})
    roles?: PermissionsToRolesUncheckedUpdateManyWithoutPermissionNestedInput;
}
