import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { RoleRelationFilter } from '../role/role-relation-filter.input';
import { PermissionRelationFilter } from '../permission/permission-relation-filter.input';

@InputType()
export class PermissionsToRolesWhereInput {

    @Field(() => [PermissionsToRolesWhereInput], {nullable:true})
    AND?: Array<PermissionsToRolesWhereInput>;

    @Field(() => [PermissionsToRolesWhereInput], {nullable:true})
    OR?: Array<PermissionsToRolesWhereInput>;

    @Field(() => [PermissionsToRolesWhereInput], {nullable:true})
    NOT?: Array<PermissionsToRolesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    roleId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    permissionId?: IntFilter;

    @Field(() => RoleRelationFilter, {nullable:true})
    Role?: RoleRelationFilter;

    @Field(() => PermissionRelationFilter, {nullable:true})
    Permission?: PermissionRelationFilter;
}
