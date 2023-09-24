import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PermissionsToRolesCountAggregate } from './permissions-to-roles-count-aggregate.output';
import { PermissionsToRolesAvgAggregate } from './permissions-to-roles-avg-aggregate.output';
import { PermissionsToRolesSumAggregate } from './permissions-to-roles-sum-aggregate.output';
import { PermissionsToRolesMinAggregate } from './permissions-to-roles-min-aggregate.output';
import { PermissionsToRolesMaxAggregate } from './permissions-to-roles-max-aggregate.output';

@ObjectType()
export class AggregatePermissionsToRoles {

    @Field(() => PermissionsToRolesCountAggregate, {nullable:true})
    _count?: PermissionsToRolesCountAggregate;

    @Field(() => PermissionsToRolesAvgAggregate, {nullable:true})
    _avg?: PermissionsToRolesAvgAggregate;

    @Field(() => PermissionsToRolesSumAggregate, {nullable:true})
    _sum?: PermissionsToRolesSumAggregate;

    @Field(() => PermissionsToRolesMinAggregate, {nullable:true})
    _min?: PermissionsToRolesMinAggregate;

    @Field(() => PermissionsToRolesMaxAggregate, {nullable:true})
    _max?: PermissionsToRolesMaxAggregate;
}
