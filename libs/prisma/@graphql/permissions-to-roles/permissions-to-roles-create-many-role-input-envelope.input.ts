import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionsToRolesCreateManyRoleInput } from './permissions-to-roles-create-many-role.input';
import { Type } from 'class-transformer';

@InputType()
export class PermissionsToRolesCreateManyRoleInputEnvelope {

    @Field(() => [PermissionsToRolesCreateManyRoleInput], {nullable:false})
    @Type(() => PermissionsToRolesCreateManyRoleInput)
    data!: Array<PermissionsToRolesCreateManyRoleInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
