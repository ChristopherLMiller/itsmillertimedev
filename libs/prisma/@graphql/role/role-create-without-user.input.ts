import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionsToRolesCreateNestedManyWithoutRoleInput } from '../permissions-to-roles/permissions-to-roles-create-nested-many-without-role.input';

@InputType()
export class RoleCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => PermissionsToRolesCreateNestedManyWithoutRoleInput, {nullable:true})
    permissions?: PermissionsToRolesCreateNestedManyWithoutRoleInput;
}
