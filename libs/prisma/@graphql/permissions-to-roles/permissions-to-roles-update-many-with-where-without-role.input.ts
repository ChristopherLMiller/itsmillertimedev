import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionsToRolesScalarWhereInput } from './permissions-to-roles-scalar-where.input';
import { Type } from 'class-transformer';
import { PermissionsToRolesUncheckedUpdateManyWithoutRoleInput } from './permissions-to-roles-unchecked-update-many-without-role.input';

@InputType()
export class PermissionsToRolesUpdateManyWithWhereWithoutRoleInput {

    @Field(() => PermissionsToRolesScalarWhereInput, {nullable:false})
    @Type(() => PermissionsToRolesScalarWhereInput)
    where!: PermissionsToRolesScalarWhereInput;

    @Field(() => PermissionsToRolesUncheckedUpdateManyWithoutRoleInput, {nullable:false})
    @Type(() => PermissionsToRolesUncheckedUpdateManyWithoutRoleInput)
    data!: PermissionsToRolesUncheckedUpdateManyWithoutRoleInput;
}
