import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PermissionsToRolesUncheckedCreateNestedManyWithoutRoleInput } from '../permissions-to-roles/permissions-to-roles-unchecked-create-nested-many-without-role.input';
import { UserUncheckedCreateNestedManyWithoutRoleInput } from '../user/user-unchecked-create-nested-many-without-role.input';

@InputType()
export class RoleUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => PermissionsToRolesUncheckedCreateNestedManyWithoutRoleInput, {nullable:true})
    permissions?: PermissionsToRolesUncheckedCreateNestedManyWithoutRoleInput;

    @Field(() => UserUncheckedCreateNestedManyWithoutRoleInput, {nullable:true})
    User?: UserUncheckedCreateNestedManyWithoutRoleInput;
}
