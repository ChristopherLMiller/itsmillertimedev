import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PermissionsToRolesWhereUniqueInput } from './permissions-to-roles-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionsToRolesCreateInput } from './permissions-to-roles-create.input';
import { PermissionsToRolesUpdateInput } from './permissions-to-roles-update.input';

@ArgsType()
export class UpsertOnePermissionsToRolesArgs {

    @Field(() => PermissionsToRolesWhereUniqueInput, {nullable:false})
    @Type(() => PermissionsToRolesWhereUniqueInput)
    where!: Prisma.AtLeast<PermissionsToRolesWhereUniqueInput, 'roleId_permissionId'>;

    @Field(() => PermissionsToRolesCreateInput, {nullable:false})
    @Type(() => PermissionsToRolesCreateInput)
    create!: PermissionsToRolesCreateInput;

    @Field(() => PermissionsToRolesUpdateInput, {nullable:false})
    @Type(() => PermissionsToRolesUpdateInput)
    update!: PermissionsToRolesUpdateInput;
}
