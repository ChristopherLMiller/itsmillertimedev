import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionWhereInput } from './permission-where.input';
import { Type } from 'class-transformer';
import { PermissionUpdateWithoutRolesInput } from './permission-update-without-roles.input';

@InputType()
export class PermissionUpdateToOneWithWhereWithoutRolesInput {

    @Field(() => PermissionWhereInput, {nullable:true})
    @Type(() => PermissionWhereInput)
    where?: PermissionWhereInput;

    @Field(() => PermissionUpdateWithoutRolesInput, {nullable:false})
    @Type(() => PermissionUpdateWithoutRolesInput)
    data!: PermissionUpdateWithoutRolesInput;
}
