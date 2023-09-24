import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PermissionCreateWithoutRolesInput {

    @Field(() => String, {nullable:false})
    node!: string;
}
