import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PermissionsToRolesWhereUniqueInput } from './permissions-to-roles-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionsToRolesUpdateWithoutRoleInput } from './permissions-to-roles-update-without-role.input';

@InputType()
export class PermissionsToRolesUpdateWithWhereUniqueWithoutRoleInput {

    @Field(() => PermissionsToRolesWhereUniqueInput, {nullable:false})
    @Type(() => PermissionsToRolesWhereUniqueInput)
    where!: Prisma.AtLeast<PermissionsToRolesWhereUniqueInput, 'roleId_permissionId'>;

    @Field(() => PermissionsToRolesUpdateWithoutRoleInput, {nullable:false})
    @Type(() => PermissionsToRolesUpdateWithoutRoleInput)
    data!: PermissionsToRolesUpdateWithoutRoleInput;
}