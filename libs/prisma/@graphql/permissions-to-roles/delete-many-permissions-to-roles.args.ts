import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionsToRolesWhereInput } from './permissions-to-roles-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPermissionsToRolesArgs {

    @Field(() => PermissionsToRolesWhereInput, {nullable:true})
    @Type(() => PermissionsToRolesWhereInput)
    where?: PermissionsToRolesWhereInput;
}
