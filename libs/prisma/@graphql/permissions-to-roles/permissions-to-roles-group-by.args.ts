import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionsToRolesWhereInput } from './permissions-to-roles-where.input';
import { Type } from 'class-transformer';
import { PermissionsToRolesOrderByWithAggregationInput } from './permissions-to-roles-order-by-with-aggregation.input';
import { PermissionsToRolesScalarFieldEnum } from './permissions-to-roles-scalar-field.enum';
import { PermissionsToRolesScalarWhereWithAggregatesInput } from './permissions-to-roles-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PermissionsToRolesCountAggregateInput } from './permissions-to-roles-count-aggregate.input';
import { PermissionsToRolesAvgAggregateInput } from './permissions-to-roles-avg-aggregate.input';
import { PermissionsToRolesSumAggregateInput } from './permissions-to-roles-sum-aggregate.input';
import { PermissionsToRolesMinAggregateInput } from './permissions-to-roles-min-aggregate.input';
import { PermissionsToRolesMaxAggregateInput } from './permissions-to-roles-max-aggregate.input';

@ArgsType()
export class PermissionsToRolesGroupByArgs {

    @Field(() => PermissionsToRolesWhereInput, {nullable:true})
    @Type(() => PermissionsToRolesWhereInput)
    where?: PermissionsToRolesWhereInput;

    @Field(() => [PermissionsToRolesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PermissionsToRolesOrderByWithAggregationInput>;

    @Field(() => [PermissionsToRolesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PermissionsToRolesScalarFieldEnum>;

    @Field(() => PermissionsToRolesScalarWhereWithAggregatesInput, {nullable:true})
    having?: PermissionsToRolesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PermissionsToRolesCountAggregateInput, {nullable:true})
    _count?: PermissionsToRolesCountAggregateInput;

    @Field(() => PermissionsToRolesAvgAggregateInput, {nullable:true})
    _avg?: PermissionsToRolesAvgAggregateInput;

    @Field(() => PermissionsToRolesSumAggregateInput, {nullable:true})
    _sum?: PermissionsToRolesSumAggregateInput;

    @Field(() => PermissionsToRolesMinAggregateInput, {nullable:true})
    _min?: PermissionsToRolesMinAggregateInput;

    @Field(() => PermissionsToRolesMaxAggregateInput, {nullable:true})
    _max?: PermissionsToRolesMaxAggregateInput;
}
