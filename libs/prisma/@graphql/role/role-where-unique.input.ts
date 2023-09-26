import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RoleWhereInput } from './role-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { PermissionsToRolesListRelationFilter } from '../permissions-to-roles/permissions-to-roles-list-relation-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';

@InputType()
export class RoleWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [RoleWhereInput], {nullable:true})
    AND?: Array<RoleWhereInput>;

    @Field(() => [RoleWhereInput], {nullable:true})
    OR?: Array<RoleWhereInput>;

    @Field(() => [RoleWhereInput], {nullable:true})
    NOT?: Array<RoleWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => PermissionsToRolesListRelationFilter, {nullable:true})
    permissions?: PermissionsToRolesListRelationFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    User?: UserListRelationFilter;
}
