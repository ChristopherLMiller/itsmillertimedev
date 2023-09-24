import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateWithoutRolesInput } from './permission-create-without-roles.input';
import { Type } from 'class-transformer';
import { PermissionCreateOrConnectWithoutRolesInput } from './permission-create-or-connect-without-roles.input';
import { PermissionUpsertWithoutRolesInput } from './permission-upsert-without-roles.input';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { PermissionUpdateWithoutRolesInput } from './permission-update-without-roles.input';

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
    connect?: PermissionWhereUniqueInput;

    @Field(() => PermissionUpdateWithoutRolesInput, {nullable:true})
    @Type(() => PermissionUpdateWithoutRolesInput)
    update?: PermissionUpdateWithoutRolesInput;
}
