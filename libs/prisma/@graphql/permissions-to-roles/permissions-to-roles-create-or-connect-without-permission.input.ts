import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionsToRolesWhereUniqueInput } from './permissions-to-roles-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionsToRolesCreateWithoutPermissionInput } from './permissions-to-roles-create-without-permission.input';

@InputType()
export class PermissionsToRolesCreateOrConnectWithoutPermissionInput {

    @Field(() => PermissionsToRolesWhereUniqueInput, {nullable:false})
    @Type(() => PermissionsToRolesWhereUniqueInput)
    where!: PermissionsToRolesWhereUniqueInput;

    @Field(() => PermissionsToRolesCreateWithoutPermissionInput, {nullable:false})
    @Type(() => PermissionsToRolesCreateWithoutPermissionInput)
    create!: PermissionsToRolesCreateWithoutPermissionInput;
}
