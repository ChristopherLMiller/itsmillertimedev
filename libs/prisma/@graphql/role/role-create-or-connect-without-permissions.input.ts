import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { Type } from 'class-transformer';
import { RoleCreateWithoutPermissionsInput } from './role-create-without-permissions.input';

@InputType()
export class RoleCreateOrConnectWithoutPermissionsInput {

    @Field(() => RoleWhereUniqueInput, {nullable:false})
    @Type(() => RoleWhereUniqueInput)
    where!: RoleWhereUniqueInput;

    @Field(() => RoleCreateWithoutPermissionsInput, {nullable:false})
    @Type(() => RoleCreateWithoutPermissionsInput)
    create!: RoleCreateWithoutPermissionsInput;
}
