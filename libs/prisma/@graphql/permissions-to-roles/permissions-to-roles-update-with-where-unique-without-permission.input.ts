import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionsToRolesWhereUniqueInput } from './permissions-to-roles-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionsToRolesUpdateWithoutPermissionInput } from './permissions-to-roles-update-without-permission.input';

@InputType()
export class PermissionsToRolesUpdateWithWhereUniqueWithoutPermissionInput {

    @Field(() => PermissionsToRolesWhereUniqueInput, {nullable:false})
    @Type(() => PermissionsToRolesWhereUniqueInput)
    where!: PermissionsToRolesWhereUniqueInput;

    @Field(() => PermissionsToRolesUpdateWithoutPermissionInput, {nullable:false})
    @Type(() => PermissionsToRolesUpdateWithoutPermissionInput)
    data!: PermissionsToRolesUpdateWithoutPermissionInput;
}
