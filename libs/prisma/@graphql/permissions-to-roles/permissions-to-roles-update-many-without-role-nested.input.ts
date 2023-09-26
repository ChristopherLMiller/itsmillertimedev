import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionsToRolesCreateWithoutRoleInput } from './permissions-to-roles-create-without-role.input';
import { Type } from 'class-transformer';
import { PermissionsToRolesCreateOrConnectWithoutRoleInput } from './permissions-to-roles-create-or-connect-without-role.input';
import { PermissionsToRolesUpsertWithWhereUniqueWithoutRoleInput } from './permissions-to-roles-upsert-with-where-unique-without-role.input';
import { PermissionsToRolesCreateManyRoleInputEnvelope } from './permissions-to-roles-create-many-role-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PermissionsToRolesWhereUniqueInput } from './permissions-to-roles-where-unique.input';
import { PermissionsToRolesUpdateWithWhereUniqueWithoutRoleInput } from './permissions-to-roles-update-with-where-unique-without-role.input';
import { PermissionsToRolesUpdateManyWithWhereWithoutRoleInput } from './permissions-to-roles-update-many-with-where-without-role.input';
import { PermissionsToRolesScalarWhereInput } from './permissions-to-roles-scalar-where.input';

@InputType()
export class PermissionsToRolesUpdateManyWithoutRoleNestedInput {

    @Field(() => [PermissionsToRolesCreateWithoutRoleInput], {nullable:true})
    @Type(() => PermissionsToRolesCreateWithoutRoleInput)
    create?: Array<PermissionsToRolesCreateWithoutRoleInput>;

    @Field(() => [PermissionsToRolesCreateOrConnectWithoutRoleInput], {nullable:true})
    @Type(() => PermissionsToRolesCreateOrConnectWithoutRoleInput)
    connectOrCreate?: Array<PermissionsToRolesCreateOrConnectWithoutRoleInput>;

    @Field(() => [PermissionsToRolesUpsertWithWhereUniqueWithoutRoleInput], {nullable:true})
    @Type(() => PermissionsToRolesUpsertWithWhereUniqueWithoutRoleInput)
    upsert?: Array<PermissionsToRolesUpsertWithWhereUniqueWithoutRoleInput>;

    @Field(() => PermissionsToRolesCreateManyRoleInputEnvelope, {nullable:true})
    @Type(() => PermissionsToRolesCreateManyRoleInputEnvelope)
    createMany?: PermissionsToRolesCreateManyRoleInputEnvelope;

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

    @Field(() => [PermissionsToRolesUpdateWithWhereUniqueWithoutRoleInput], {nullable:true})
    @Type(() => PermissionsToRolesUpdateWithWhereUniqueWithoutRoleInput)
    update?: Array<PermissionsToRolesUpdateWithWhereUniqueWithoutRoleInput>;

    @Field(() => [PermissionsToRolesUpdateManyWithWhereWithoutRoleInput], {nullable:true})
    @Type(() => PermissionsToRolesUpdateManyWithWhereWithoutRoleInput)
    updateMany?: Array<PermissionsToRolesUpdateManyWithWhereWithoutRoleInput>;

    @Field(() => [PermissionsToRolesScalarWhereInput], {nullable:true})
    @Type(() => PermissionsToRolesScalarWhereInput)
    deleteMany?: Array<PermissionsToRolesScalarWhereInput>;
}
