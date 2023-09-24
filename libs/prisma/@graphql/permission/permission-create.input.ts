import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionsToRolesCreateNestedManyWithoutPermissionInput } from '../permissions-to-roles/permissions-to-roles-create-nested-many-without-permission.input';

@InputType()
export class PermissionCreateInput {

    @Field(() => String, {nullable:false})
    node!: string;

    @Field(() => PermissionsToRolesCreateNestedManyWithoutPermissionInput, {nullable:true})
    roles?: PermissionsToRolesCreateNestedManyWithoutPermissionInput;
}
