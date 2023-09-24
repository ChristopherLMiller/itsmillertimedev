import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionsToRolesWhereUniqueInput } from './permissions-to-roles-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionsToRolesCreateWithoutRoleInput } from './permissions-to-roles-create-without-role.input';

@InputType()
export class PermissionsToRolesCreateOrConnectWithoutRoleInput {

    @Field(() => PermissionsToRolesWhereUniqueInput, {nullable:false})
    @Type(() => PermissionsToRolesWhereUniqueInput)
    where!: PermissionsToRolesWhereUniqueInput;

    @Field(() => PermissionsToRolesCreateWithoutRoleInput, {nullable:false})
    @Type(() => PermissionsToRolesCreateWithoutRoleInput)
    create!: PermissionsToRolesCreateWithoutRoleInput;
}
