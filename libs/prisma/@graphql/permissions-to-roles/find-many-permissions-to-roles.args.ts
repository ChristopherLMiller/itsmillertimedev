import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionsToRolesWhereInput } from './permissions-to-roles-where.input';
import { Type } from 'class-transformer';
import { PermissionsToRolesOrderByWithRelationInput } from './permissions-to-roles-order-by-with-relation.input';
import { PermissionsToRolesWhereUniqueInput } from './permissions-to-roles-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PermissionsToRolesScalarFieldEnum } from './permissions-to-roles-scalar-field.enum';

@ArgsType()
export class FindManyPermissionsToRolesArgs {

    @Field(() => PermissionsToRolesWhereInput, {nullable:true})
    @Type(() => PermissionsToRolesWhereInput)
    where?: PermissionsToRolesWhereInput;

    @Field(() => [PermissionsToRolesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PermissionsToRolesOrderByWithRelationInput>;

    @Field(() => PermissionsToRolesWhereUniqueInput, {nullable:true})
    cursor?: PermissionsToRolesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PermissionsToRolesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PermissionsToRolesScalarFieldEnum>;
}
