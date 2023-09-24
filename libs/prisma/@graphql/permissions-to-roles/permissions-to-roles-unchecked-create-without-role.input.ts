import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PermissionsToRolesUncheckedCreateWithoutRoleInput {

    @Field(() => Int, {nullable:false})
    permissionId!: number;
}
