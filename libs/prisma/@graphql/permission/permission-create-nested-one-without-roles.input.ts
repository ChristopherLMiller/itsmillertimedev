import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateWithoutRolesInput } from './permission-create-without-roles.input';
import { Type } from 'class-transformer';
import { PermissionCreateOrConnectWithoutRolesInput } from './permission-create-or-connect-without-roles.input';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';

@InputType()
export class PermissionCreateNestedOneWithoutRolesInput {

    @Field(() => PermissionCreateWithoutRolesInput, {nullable:true})
    @Type(() => PermissionCreateWithoutRolesInput)
    create?: PermissionCreateWithoutRolesInput;

    @Field(() => PermissionCreateOrConnectWithoutRolesInput, {nullable:true})
    @Type(() => PermissionCreateOrConnectWithoutRolesInput)
    connectOrCreate?: PermissionCreateOrConnectWithoutRolesInput;

    @Field(() => PermissionWhereUniqueInput, {nullable:true})
    @Type(() => PermissionWhereUniqueInput)
    connect?: PermissionWhereUniqueInput;
}
