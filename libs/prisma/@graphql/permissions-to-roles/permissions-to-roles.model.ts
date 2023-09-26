import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Role } from '../role/role.model';
import { Permission } from '../permission/permission.model';

@ObjectType()
export class PermissionsToRoles {

    @Field(() => Int, {nullable:false})
    roleId!: number;

    @Field(() => Int, {nullable:false})
    permissionId!: number;

    @Field(() => Role, {nullable:false})
    Role?: Role;

    @Field(() => Permission, {nullable:false})
    Permission?: Permission;
}
