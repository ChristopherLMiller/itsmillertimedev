import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class PermissionsToRolesScalarWhereInput {

    @Field(() => [PermissionsToRolesScalarWhereInput], {nullable:true})
    AND?: Array<PermissionsToRolesScalarWhereInput>;

    @Field(() => [PermissionsToRolesScalarWhereInput], {nullable:true})
    OR?: Array<PermissionsToRolesScalarWhereInput>;

    @Field(() => [PermissionsToRolesScalarWhereInput], {nullable:true})
    NOT?: Array<PermissionsToRolesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    roleId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    permissionId?: IntFilter;
}
