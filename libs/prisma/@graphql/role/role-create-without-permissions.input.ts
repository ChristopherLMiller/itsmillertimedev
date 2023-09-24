import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutRoleInput } from '../user/user-create-nested-many-without-role.input';

@InputType()
export class RoleCreateWithoutPermissionsInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => UserCreateNestedManyWithoutRoleInput, {nullable:true})
    User?: UserCreateNestedManyWithoutRoleInput;
}
