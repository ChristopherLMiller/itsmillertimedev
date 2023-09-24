import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { PermissionsToRoles } from '../permissions-to-roles/permissions-to-roles.model';
import { PermissionCount } from './permission-count.output';

@ObjectType()
export class Permission {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    node!: string;

    @Field(() => [PermissionsToRoles], {nullable:true})
    roles?: Array<PermissionsToRoles>;

    @Field(() => PermissionCount, {nullable:false})
    _count?: PermissionCount;
}
