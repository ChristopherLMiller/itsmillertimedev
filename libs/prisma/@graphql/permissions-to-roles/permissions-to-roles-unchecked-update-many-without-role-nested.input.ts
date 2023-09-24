import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionsToRolesCreateWithoutRoleInput } from './permissions-to-roles-create-without-role.input';
import { Type } from 'class-transformer';
import { PermissionsToRolesCreateOrConnectWithoutRoleInput } from './permissions-to-roles-create-or-connect-without-role.input';
import { PermissionsToRolesUpsertWithWhereUniqueWithoutRoleInput } from './permissions-to-roles-upsert-with-where-unique-without-role.input';
import { PermissionsToRolesCreateManyRoleInputEnvelope } from './permissions-to-roles-create-many-role-input-envelope.input';
import { PermissionsToRolesWhereUniqueInput } from './permissions-to-roles-where-unique.input';
import { PermissionsToRolesUpdateWithWhereUniqueWithoutRoleInput } from './permissions-to-roles-update-with-where-unique-without-role.input';
import { PermissionsToRolesUpdateManyWithWhereWithoutRoleInput } from './permissions-to-roles-update-many-with-where-without-role.input';
import { PermissionsToRolesScalarWhereInput } from './permissions-to-roles-scalar-where.input';

@InputType()
export class PermissionsToRolesUncheckedUpdateManyWithoutRoleNestedInput {

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
    set?: Array<PermissionsToRolesWhereUniqueInput>;

    @Field(() => [PermissionsToRolesWhereUniqueInput], {nullable:true})
    @Type(() => PermissionsToRolesWhereUniqueInput)
    disconnect?: Array<PermissionsToRolesWhereUniqueInput>;

    @Field(() => [PermissionsToRolesWhereUniqueInput], {nullable:true})
    @Type(() => PermissionsToRolesWhereUniqueInput)
    delete?: Array<PermissionsToRolesWhereUniqueInput>;

    @Field(() => [PermissionsToRolesWhereUniqueInput], {nullable:true})
    @Type(() => PermissionsToRolesWhereUniqueInput)
    connect?: Array<PermissionsToRolesWhereUniqueInput>;

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
