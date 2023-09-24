import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PermissionsToRolesUncheckedCreateNestedManyWithoutPermissionInput } from '../permissions-to-roles/permissions-to-roles-unchecked-create-nested-many-without-permission.input';

@InputType()
export class PermissionUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    node!: string;

    @Field(() => PermissionsToRolesUncheckedCreateNestedManyWithoutPermissionInput, {nullable:true})
    roles?: PermissionsToRolesUncheckedCreateNestedManyWithoutPermissionInput;
}
