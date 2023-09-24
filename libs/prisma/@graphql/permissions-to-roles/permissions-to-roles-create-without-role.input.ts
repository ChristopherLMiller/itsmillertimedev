import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateNestedOneWithoutRolesInput } from '../permission/permission-create-nested-one-without-roles.input';

@InputType()
export class PermissionsToRolesCreateWithoutRoleInput {

    @Field(() => PermissionCreateNestedOneWithoutRolesInput, {nullable:false})
    Permission!: PermissionCreateNestedOneWithoutRolesInput;
}
