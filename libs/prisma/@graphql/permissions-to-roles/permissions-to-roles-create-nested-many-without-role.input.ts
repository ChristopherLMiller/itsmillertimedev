import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionsToRolesCreateWithoutRoleInput } from './permissions-to-roles-create-without-role.input';
import { Type } from 'class-transformer';
import { PermissionsToRolesCreateOrConnectWithoutRoleInput } from './permissions-to-roles-create-or-connect-without-role.input';
import { PermissionsToRolesCreateManyRoleInputEnvelope } from './permissions-to-roles-create-many-role-input-envelope.input';
import { PermissionsToRolesWhereUniqueInput } from './permissions-to-roles-where-unique.input';

@InputType()
export class PermissionsToRolesCreateNestedManyWithoutRoleInput {

    @Field(() => [PermissionsToRolesCreateWithoutRoleInput], {nullable:true})
    @Type(() => PermissionsToRolesCreateWithoutRoleInput)
    create?: Array<PermissionsToRolesCreateWithoutRoleInput>;

    @Field(() => [PermissionsToRolesCreateOrConnectWithoutRoleInput], {nullable:true})
    @Type(() => PermissionsToRolesCreateOrConnectWithoutRoleInput)
    connectOrCreate?: Array<PermissionsToRolesCreateOrConnectWithoutRoleInput>;

    @Field(() => PermissionsToRolesCreateManyRoleInputEnvelope, {nullable:true})
    @Type(() => PermissionsToRolesCreateManyRoleInputEnvelope)
    createMany?: PermissionsToRolesCreateManyRoleInputEnvelope;

    @Field(() => [PermissionsToRolesWhereUniqueInput], {nullable:true})
    @Type(() => PermissionsToRolesWhereUniqueInput)
    connect?: Array<PermissionsToRolesWhereUniqueInput>;
}
