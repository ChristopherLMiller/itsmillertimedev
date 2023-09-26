import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { RoleRelationFilter } from '../role/role-relation-filter.input';

@InputType()
export class UserWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    supabaseId?: string;

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    roleId?: IntFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    meta?: JsonNullableFilter;

    @Field(() => RoleRelationFilter, {nullable:true})
    role?: RoleRelationFilter;
}
