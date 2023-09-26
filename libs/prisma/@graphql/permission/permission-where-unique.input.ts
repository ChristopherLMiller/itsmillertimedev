import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PermissionWhereInput } from './permission-where.input';
import { PermissionsToRolesListRelationFilter } from '../permissions-to-roles/permissions-to-roles-list-relation-filter.input';

@InputType()
export class PermissionWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    node?: string;

    @Field(() => [PermissionWhereInput], {nullable:true})
    AND?: Array<PermissionWhereInput>;

    @Field(() => [PermissionWhereInput], {nullable:true})
    OR?: Array<PermissionWhereInput>;

    @Field(() => [PermissionWhereInput], {nullable:true})
    NOT?: Array<PermissionWhereInput>;

    @Field(() => PermissionsToRolesListRelationFilter, {nullable:true})
    roles?: PermissionsToRolesListRelationFilter;
}
