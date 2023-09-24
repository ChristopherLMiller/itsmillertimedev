import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateNestedOneWithoutPermissionsInput } from '../role/role-create-nested-one-without-permissions.input';

@InputType()
export class PermissionsToRolesCreateWithoutPermissionInput {

    @Field(() => RoleCreateNestedOneWithoutPermissionsInput, {nullable:false})
    Role!: RoleCreateNestedOneWithoutPermissionsInput;
}
