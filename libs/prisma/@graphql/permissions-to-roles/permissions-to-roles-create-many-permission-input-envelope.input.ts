import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionsToRolesCreateManyPermissionInput } from './permissions-to-roles-create-many-permission.input';
import { Type } from 'class-transformer';

@InputType()
export class PermissionsToRolesCreateManyPermissionInputEnvelope {

    @Field(() => [PermissionsToRolesCreateManyPermissionInput], {nullable:false})
    @Type(() => PermissionsToRolesCreateManyPermissionInput)
    data!: Array<PermissionsToRolesCreateManyPermissionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
