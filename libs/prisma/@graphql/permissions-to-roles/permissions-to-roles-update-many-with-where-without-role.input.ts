import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionsToRolesScalarWhereInput } from './permissions-to-roles-scalar-where.input';
import { Type } from 'class-transformer';
import { PermissionsToRolesUncheckedUpdateManyWithoutPermissionsInput } from './permissions-to-roles-unchecked-update-many-without-permissions.input';

@InputType()
export class PermissionsToRolesUpdateManyWithWhereWithoutRoleInput {

    @Field(() => PermissionsToRolesScalarWhereInput, {nullable:false})
    @Type(() => PermissionsToRolesScalarWhereInput)
    where!: PermissionsToRolesScalarWhereInput;

    @Field(() => PermissionsToRolesUncheckedUpdateManyWithoutPermissionsInput, {nullable:false})
    @Type(() => PermissionsToRolesUncheckedUpdateManyWithoutPermissionsInput)
    data!: PermissionsToRolesUncheckedUpdateManyWithoutPermissionsInput;
}
