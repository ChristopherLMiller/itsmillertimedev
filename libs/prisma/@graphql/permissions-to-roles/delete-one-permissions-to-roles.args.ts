import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PermissionsToRolesWhereUniqueInput } from './permissions-to-roles-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnePermissionsToRolesArgs {

    @Field(() => PermissionsToRolesWhereUniqueInput, {nullable:false})
    @Type(() => PermissionsToRolesWhereUniqueInput)
    where!: Prisma.AtLeast<PermissionsToRolesWhereUniqueInput, 'roleId_permissionId'>;
}
