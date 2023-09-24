import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionsToRolesScalarWhereInput } from './permissions-to-roles-scalar-where.input';
import { Type } from 'class-transformer';
import { PermissionsToRolesUncheckedUpdateManyWithoutRolesInput } from './permissions-to-roles-unchecked-update-many-without-roles.input';

@InputType()
export class PermissionsToRolesUpdateManyWithWhereWithoutPermissionInput {

    @Field(() => PermissionsToRolesScalarWhereInput, {nullable:false})
    @Type(() => PermissionsToRolesScalarWhereInput)
    where!: PermissionsToRolesScalarWhereInput;

    @Field(() => PermissionsToRolesUncheckedUpdateManyWithoutRolesInput, {nullable:false})
    @Type(() => PermissionsToRolesUncheckedUpdateManyWithoutRolesInput)
    data!: PermissionsToRolesUncheckedUpdateManyWithoutRolesInput;
}
