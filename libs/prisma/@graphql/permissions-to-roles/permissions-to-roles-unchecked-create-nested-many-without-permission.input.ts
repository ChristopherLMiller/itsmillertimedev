import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionsToRolesCreateWithoutPermissionInput } from './permissions-to-roles-create-without-permission.input';
import { Type } from 'class-transformer';
import { PermissionsToRolesCreateOrConnectWithoutPermissionInput } from './permissions-to-roles-create-or-connect-without-permission.input';
import { PermissionsToRolesCreateManyPermissionInputEnvelope } from './permissions-to-roles-create-many-permission-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PermissionsToRolesWhereUniqueInput } from './permissions-to-roles-where-unique.input';

@InputType()
export class PermissionsToRolesUncheckedCreateNestedManyWithoutPermissionInput {

    @Field(() => [PermissionsToRolesCreateWithoutPermissionInput], {nullable:true})
    @Type(() => PermissionsToRolesCreateWithoutPermissionInput)
    create?: Array<PermissionsToRolesCreateWithoutPermissionInput>;

    @Field(() => [PermissionsToRolesCreateOrConnectWithoutPermissionInput], {nullable:true})
    @Type(() => PermissionsToRolesCreateOrConnectWithoutPermissionInput)
    connectOrCreate?: Array<PermissionsToRolesCreateOrConnectWithoutPermissionInput>;

    @Field(() => PermissionsToRolesCreateManyPermissionInputEnvelope, {nullable:true})
    @Type(() => PermissionsToRolesCreateManyPermissionInputEnvelope)
    createMany?: PermissionsToRolesCreateManyPermissionInputEnvelope;

    @Field(() => [PermissionsToRolesWhereUniqueInput], {nullable:true})
    @Type(() => PermissionsToRolesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PermissionsToRolesWhereUniqueInput, 'roleId_permissionId'>>;
}