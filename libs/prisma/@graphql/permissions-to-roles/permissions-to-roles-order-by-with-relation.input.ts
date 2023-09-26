import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RoleOrderByWithRelationInput } from '../role/role-order-by-with-relation.input';
import { PermissionOrderByWithRelationInput } from '../permission/permission-order-by-with-relation.input';

@InputType()
export class PermissionsToRolesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    roleId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    permissionId?: keyof typeof SortOrder;

    @Field(() => RoleOrderByWithRelationInput, {nullable:true})
    Role?: RoleOrderByWithRelationInput;

    @Field(() => PermissionOrderByWithRelationInput, {nullable:true})
    Permission?: PermissionOrderByWithRelationInput;
}
