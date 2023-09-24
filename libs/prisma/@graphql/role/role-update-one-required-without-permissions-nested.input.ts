import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutPermissionsInput } from './role-create-without-permissions.input';
import { Type } from 'class-transformer';
import { RoleCreateOrConnectWithoutPermissionsInput } from './role-create-or-connect-without-permissions.input';
import { RoleUpsertWithoutPermissionsInput } from './role-upsert-without-permissions.input';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { RoleUpdateWithoutPermissionsInput } from './role-update-without-permissions.input';

@InputType()
export class RoleUpdateOneRequiredWithoutPermissionsNestedInput {

    @Field(() => RoleCreateWithoutPermissionsInput, {nullable:true})
    @Type(() => RoleCreateWithoutPermissionsInput)
    create?: RoleCreateWithoutPermissionsInput;

    @Field(() => RoleCreateOrConnectWithoutPermissionsInput, {nullable:true})
    @Type(() => RoleCreateOrConnectWithoutPermissionsInput)
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput;

    @Field(() => RoleUpsertWithoutPermissionsInput, {nullable:true})
    @Type(() => RoleUpsertWithoutPermissionsInput)
    upsert?: RoleUpsertWithoutPermissionsInput;

    @Field(() => RoleWhereUniqueInput, {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    connect?: RoleWhereUniqueInput;

    @Field(() => RoleUpdateWithoutPermissionsInput, {nullable:true})
    @Type(() => RoleUpdateWithoutPermissionsInput)
    update?: RoleUpdateWithoutPermissionsInput;
}
