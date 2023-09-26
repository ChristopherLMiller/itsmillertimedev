import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionsToRolesUpdateInput } from './permissions-to-roles-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PermissionsToRolesWhereUniqueInput } from './permissions-to-roles-where-unique.input';

@ArgsType()
export class UpdateOnePermissionsToRolesArgs {

    @Field(() => PermissionsToRolesUpdateInput, {nullable:false})
    @Type(() => PermissionsToRolesUpdateInput)
    data!: PermissionsToRolesUpdateInput;

    @Field(() => PermissionsToRolesWhereUniqueInput, {nullable:false})
    @Type(() => PermissionsToRolesWhereUniqueInput)
    where!: Prisma.AtLeast<PermissionsToRolesWhereUniqueInput, 'roleId_permissionId'>;
}
