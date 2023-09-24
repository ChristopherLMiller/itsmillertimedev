import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleOrderByWithRelationInput } from '../role/role-order-by-with-relation.input';
import { SortOrder } from '../prisma/sort-order.enum';
import { PermissionOrderByWithRelationInput } from '../permission/permission-order-by-with-relation.input';

@InputType()
export class PermissionsToRolesOrderByWithRelationInput {

    @Field(() => RoleOrderByWithRelationInput, {nullable:true})
    Role?: RoleOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    roleId?: keyof typeof SortOrder;

    @Field(() => PermissionOrderByWithRelationInput, {nullable:true})
    Permission?: PermissionOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    permissionId?: keyof typeof SortOrder;
}
