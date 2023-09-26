import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PermissionsToRolesWhereUniqueInput } from './permissions-to-roles-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionsToRolesCreateWithoutPermissionInput } from './permissions-to-roles-create-without-permission.input';

@InputType()
export class PermissionsToRolesCreateOrConnectWithoutPermissionInput {

    @Field(() => PermissionsToRolesWhereUniqueInput, {nullable:false})
    @Type(() => PermissionsToRolesWhereUniqueInput)
    where!: Prisma.AtLeast<PermissionsToRolesWhereUniqueInput, 'roleId_permissionId'>;

    @Field(() => PermissionsToRolesCreateWithoutPermissionInput, {nullable:false})
    @Type(() => PermissionsToRolesCreateWithoutPermissionInput)
    create!: PermissionsToRolesCreateWithoutPermissionInput;
}
