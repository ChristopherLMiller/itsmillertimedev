import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionCreateWithoutRolesInput } from './permission-create-without-roles.input';

@InputType()
export class PermissionCreateOrConnectWithoutRolesInput {

    @Field(() => PermissionWhereUniqueInput, {nullable:false})
    @Type(() => PermissionWhereUniqueInput)
    where!: Prisma.AtLeast<PermissionWhereUniqueInput, 'id' | 'node'>;

    @Field(() => PermissionCreateWithoutRolesInput, {nullable:false})
    @Type(() => PermissionCreateWithoutRolesInput)
    create!: PermissionCreateWithoutRolesInput;
}
