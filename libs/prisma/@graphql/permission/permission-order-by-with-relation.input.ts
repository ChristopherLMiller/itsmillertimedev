import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PermissionsToRolesOrderByRelationAggregateInput } from '../permissions-to-roles/permissions-to-roles-order-by-relation-aggregate.input';

@InputType()
export class PermissionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    node?: keyof typeof SortOrder;

    @Field(() => PermissionsToRolesOrderByRelationAggregateInput, {nullable:true})
    roles?: PermissionsToRolesOrderByRelationAggregateInput;
}
