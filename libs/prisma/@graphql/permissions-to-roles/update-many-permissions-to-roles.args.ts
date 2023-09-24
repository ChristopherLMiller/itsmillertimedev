import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionsToRolesUncheckedUpdateManyInput } from './permissions-to-roles-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { PermissionsToRolesWhereInput } from './permissions-to-roles-where.input';

@ArgsType()
export class UpdateManyPermissionsToRolesArgs {

    @Field(() => PermissionsToRolesUncheckedUpdateManyInput, {nullable:false})
    @Type(() => PermissionsToRolesUncheckedUpdateManyInput)
    data!: PermissionsToRolesUncheckedUpdateManyInput;

    @Field(() => PermissionsToRolesWhereInput, {nullable:true})
    @Type(() => PermissionsToRolesWhereInput)
    where?: PermissionsToRolesWhereInput;
}
