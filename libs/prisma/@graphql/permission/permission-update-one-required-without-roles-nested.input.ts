import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateWithoutRolesInput } from './permission-create-without-roles.input';
import { Type } from 'class-transformer';
import { PermissionCreateOrConnectWithoutRolesInput } from './permission-create-or-connect-without-roles.input';
import { PermissionUpsertWithoutRolesInput } from './permission-upsert-without-roles.input';
import { Prisma } from '@prisma/client';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { PermissionUpdateToOneWithWhereWithoutRolesInput } from './permission-update-to-one-with-where-without-roles.input';

@InputType()
export class PermissionUpdateOneRequiredWithoutRolesNestedInput {

    @Field(() => PermissionCreateWithoutRolesInput, {nullable:true})
    @Type(() => PermissionCreateWithoutRolesInput)
    create?: PermissionCreateWithoutRolesInput;

    @Field(() => PermissionCreateOrConnectWithoutRolesInput, {nullable:true})
    @Type(() => PermissionCreateOrConnectWithoutRolesInput)
    connectOrCreate?: PermissionCreateOrConnectWithoutRolesInput;

    @Field(() => PermissionUpsertWithoutRolesInput, {nullable:true})
    @Type(() => PermissionUpsertWithoutRolesInput)
    upsert?: PermissionUpsertWithoutRolesInput;

    @Field(() => PermissionWhereUniqueInput, {nullable:true})
    @Type(() => PermissionWhereUniqueInput)
    connect?: Prisma.AtLeast<PermissionWhereUniqueInput, 'id' | 'node'>;

    @Field(() => PermissionUpdateToOneWithWhereWithoutRolesInput, {nullable:true})
    @Type(() => PermissionUpdateToOneWithWhereWithoutRolesInput)
    update?: PermissionUpdateToOneWithWhereWithoutRolesInput;
}
