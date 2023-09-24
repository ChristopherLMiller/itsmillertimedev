import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PermissionsToRolesCountOrderByAggregateInput } from './permissions-to-roles-count-order-by-aggregate.input';
import { PermissionsToRolesAvgOrderByAggregateInput } from './permissions-to-roles-avg-order-by-aggregate.input';
import { PermissionsToRolesMaxOrderByAggregateInput } from './permissions-to-roles-max-order-by-aggregate.input';
import { PermissionsToRolesMinOrderByAggregateInput } from './permissions-to-roles-min-order-by-aggregate.input';
import { PermissionsToRolesSumOrderByAggregateInput } from './permissions-to-roles-sum-order-by-aggregate.input';

@InputType()
export class PermissionsToRolesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    roleId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    permissionId?: keyof typeof SortOrder;

    @Field(() => PermissionsToRolesCountOrderByAggregateInput, {nullable:true})
    _count?: PermissionsToRolesCountOrderByAggregateInput;

    @Field(() => PermissionsToRolesAvgOrderByAggregateInput, {nullable:true})
    _avg?: PermissionsToRolesAvgOrderByAggregateInput;

    @Field(() => PermissionsToRolesMaxOrderByAggregateInput, {nullable:true})
    _max?: PermissionsToRolesMaxOrderByAggregateInput;

    @Field(() => PermissionsToRolesMinOrderByAggregateInput, {nullable:true})
    _min?: PermissionsToRolesMinOrderByAggregateInput;

    @Field(() => PermissionsToRolesSumOrderByAggregateInput, {nullable:true})
    _sum?: PermissionsToRolesSumOrderByAggregateInput;
}
