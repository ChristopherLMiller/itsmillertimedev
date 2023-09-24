import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class PermissionsToRolesScalarWhereWithAggregatesInput {

    @Field(() => [PermissionsToRolesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PermissionsToRolesScalarWhereWithAggregatesInput>;

    @Field(() => [PermissionsToRolesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PermissionsToRolesScalarWhereWithAggregatesInput>;

    @Field(() => [PermissionsToRolesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PermissionsToRolesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    roleId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    permissionId?: IntWithAggregatesFilter;
}
