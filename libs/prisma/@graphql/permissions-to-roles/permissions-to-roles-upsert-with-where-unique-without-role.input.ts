import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionsToRolesWhereUniqueInput } from './permissions-to-roles-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionsToRolesUpdateWithoutRoleInput } from './permissions-to-roles-update-without-role.input';
import { PermissionsToRolesCreateWithoutRoleInput } from './permissions-to-roles-create-without-role.input';

@InputType()
export class PermissionsToRolesUpsertWithWhereUniqueWithoutRoleInput {

    @Field(() => PermissionsToRolesWhereUniqueInput, {nullable:false})
    @Type(() => PermissionsToRolesWhereUniqueInput)
    where!: PermissionsToRolesWhereUniqueInput;

    @Field(() => PermissionsToRolesUpdateWithoutRoleInput, {nullable:false})
    @Type(() => PermissionsToRolesUpdateWithoutRoleInput)
    update!: PermissionsToRolesUpdateWithoutRoleInput;

    @Field(() => PermissionsToRolesCreateWithoutRoleInput, {nullable:false})
    @Type(() => PermissionsToRolesCreateWithoutRoleInput)
    create!: PermissionsToRolesCreateWithoutRoleInput;
}
