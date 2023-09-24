import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { PermissionsToRoles } from '../permissions-to-roles/permissions-to-roles.model';
import { User } from '../user/user.model';
import { RoleCount } from './role-count.output';

@ObjectType()
export class Role {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [PermissionsToRoles], {nullable:true})
    permissions?: Array<PermissionsToRoles>;

    @Field(() => [User], {nullable:true})
    User?: Array<User>;

    @Field(() => RoleCount, {nullable:false})
    _count?: RoleCount;
}
