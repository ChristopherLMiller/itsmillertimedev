import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionsToRolesScalarWhereInput } from './permissions-to-roles-scalar-where.input';
import { Type } from 'class-transformer';
import { PermissionsToRolesUncheckedUpdateManyWithoutPermissionInput } from './permissions-to-roles-unchecked-update-many-without-permission.input';

@InputType()
export class PermissionsToRolesUpdateManyWithWhereWithoutPermissionInput {

    @Field(() => PermissionsToRolesScalarWhereInput, {nullable:false})
    @Type(() => PermissionsToRolesScalarWhereInput)
    where!: PermissionsToRolesScalarWhereInput;

    @Field(() => PermissionsToRolesUncheckedUpdateManyWithoutPermissionInput, {nullable:false})
    @Type(() => PermissionsToRolesUncheckedUpdateManyWithoutPermissionInput)
    data!: PermissionsToRolesUncheckedUpdateManyWithoutPermissionInput;
}
