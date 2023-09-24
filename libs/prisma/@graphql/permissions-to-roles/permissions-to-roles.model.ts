import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Role } from '../role/role.model';
import { Int } from '@nestjs/graphql';
import { Permission } from '../permission/permission.model';

@ObjectType()
export class PermissionsToRoles {

    @Field(() => Role, {nullable:false})
    Role?: Role;

    @Field(() => Int, {nullable:false})
    roleId!: number;

    @Field(() => Permission, {nullable:false})
    Permission?: Permission;

    @Field(() => Int, {nullable:false})
    permissionId!: number;
}
