import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionUpdateWithoutRolesInput } from './permission-update-without-roles.input';
import { Type } from 'class-transformer';
import { PermissionCreateWithoutRolesInput } from './permission-create-without-roles.input';
import { PermissionWhereInput } from './permission-where.input';

@InputType()
export class PermissionUpsertWithoutRolesInput {

    @Field(() => PermissionUpdateWithoutRolesInput, {nullable:false})
    @Type(() => PermissionUpdateWithoutRolesInput)
    update!: PermissionUpdateWithoutRolesInput;

    @Field(() => PermissionCreateWithoutRolesInput, {nullable:false})
    @Type(() => PermissionCreateWithoutRolesInput)
    create!: PermissionCreateWithoutRolesInput;

    @Field(() => PermissionWhereInput, {nullable:true})
    @Type(() => PermissionWhereInput)
    where?: PermissionWhereInput;
}
