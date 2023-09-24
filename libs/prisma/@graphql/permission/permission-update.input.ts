import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PermissionsToRolesUpdateManyWithoutPermissionNestedInput } from '../permissions-to-roles/permissions-to-roles-update-many-without-permission-nested.input';

@InputType()
export class PermissionUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    node?: StringFieldUpdateOperationsInput;

    @Field(() => PermissionsToRolesUpdateManyWithoutPermissionNestedInput, {nullable:true})
    roles?: PermissionsToRolesUpdateManyWithoutPermissionNestedInput;
}
