import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PermissionsToRolesCreateManyPermissionInput {

    @Field(() => Int, {nullable:false})
    roleId!: number;
}
