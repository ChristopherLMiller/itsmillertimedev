import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionsToRolesCreateWithoutPermissionInput } from './permissions-to-roles-create-without-permission.input';
import { Type } from 'class-transformer';
import { PermissionsToRolesCreateOrConnectWithoutPermissionInput } from './permissions-to-roles-create-or-connect-without-permission.input';
import { PermissionsToRolesUpsertWithWhereUniqueWithoutPermissionInput } from './permissions-to-roles-upsert-with-where-unique-without-permission.input';
import { PermissionsToRolesCreateManyPermissionInputEnvelope } from './permissions-to-roles-create-many-permission-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PermissionsToRolesWhereUniqueInput } from './permissions-to-roles-where-unique.input';
import { PermissionsToRolesUpdateWithWhereUniqueWithoutPermissionInput } from './permissions-to-roles-update-with-where-unique-without-permission.input';
import { PermissionsToRolesUpdateManyWithWhereWithoutPermissionInput } from './permissions-to-roles-update-many-with-where-without-permission.input';
import { PermissionsToRolesScalarWhereInput } from './permissions-to-roles-scalar-where.input';

@InputType()
export class PermissionsToRolesUpdateManyWithoutPermissionNestedInput {

    @Field(() => [PermissionsToRolesCreateWithoutPermissionInput], {nullable:true})
    @Type(() => PermissionsToRolesCreateWithoutPermissionInput)
    create?: Array<PermissionsToRolesCreateWithoutPermissionInput>;

    @Field(() => [PermissionsToRolesCreateOrConnectWithoutPermissionInput], {nullable:true})
    @Type(() => PermissionsToRolesCreateOrConnectWithoutPermissionInput)
    connectOrCreate?: Array<PermissionsToRolesCreateOrConnectWithoutPermissionInput>;

    @Field(() => [PermissionsToRolesUpsertWithWhereUniqueWithoutPermissionInput], {nullable:true})
    @Type(() => PermissionsToRolesUpsertWithWhereUniqueWithoutPermissionInput)
    upsert?: Array<PermissionsToRolesUpsertWithWhereUniqueWithoutPermissionInput>;

    @Field(() => PermissionsToRolesCreateManyPermissionInputEnvelope, {nullable:true})
    @Type(() => PermissionsToRolesCreateManyPermissionInputEnvelope)
    createMany?: PermissionsToRolesCreateManyPermissionInputEnvelope;

    @Field(() => [PermissionsToRolesWhereUniqueInput], {nullable:true})
    @Type(() => PermissionsToRolesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PermissionsToRolesWhereUniqueInput, 'roleId_permissionId'>>;

    @Field(() => [PermissionsToRolesWhereUniqueInput], {nullable:true})
    @Type(() => PermissionsToRolesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PermissionsToRolesWhereUniqueInput, 'roleId_permissionId'>>;

    @Field(() => [PermissionsToRolesWhereUniqueInput], {nullable:true})
    @Type(() => PermissionsToRolesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PermissionsToRolesWhereUniqueInput, 'roleId_permissionId'>>;

    @Field(() => [PermissionsToRolesWhereUniqueInput], {nullable:true})
    @Type(() => PermissionsToRolesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PermissionsToRolesWhereUniqueInput, 'roleId_permissionId'>>;

    @Field(() => [PermissionsToRolesUpdateWithWhereUniqueWithoutPermissionInput], {nullable:true})
    @Type(() => PermissionsToRolesUpdateWithWhereUniqueWithoutPermissionInput)
    update?: Array<PermissionsToRolesUpdateWithWhereUniqueWithoutPermissionInput>;

    @Field(() => [PermissionsToRolesUpdateManyWithWhereWithoutPermissionInput], {nullable:true})
    @Type(() => PermissionsToRolesUpdateManyWithWhereWithoutPermissionInput)
    updateMany?: Array<PermissionsToRolesUpdateManyWithWhereWithoutPermissionInput>;

    @Field(() => [PermissionsToRolesScalarWhereInput], {nullable:true})
    @Type(() => PermissionsToRolesScalarWhereInput)
    deleteMany?: Array<PermissionsToRolesScalarWhereInput>;
}
