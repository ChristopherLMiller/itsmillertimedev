import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionsToRolesCreateInput } from './permissions-to-roles-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePermissionsToRolesArgs {

    @Field(() => PermissionsToRolesCreateInput, {nullable:false})
    @Type(() => PermissionsToRolesCreateInput)
    data!: PermissionsToRolesCreateInput;
}
