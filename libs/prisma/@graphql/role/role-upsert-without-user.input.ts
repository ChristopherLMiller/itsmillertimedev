import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleUpdateWithoutUserInput } from './role-update-without-user.input';
import { Type } from 'class-transformer';
import { RoleCreateWithoutUserInput } from './role-create-without-user.input';

@InputType()
export class RoleUpsertWithoutUserInput {

    @Field(() => RoleUpdateWithoutUserInput, {nullable:false})
    @Type(() => RoleUpdateWithoutUserInput)
    update!: RoleUpdateWithoutUserInput;

    @Field(() => RoleCreateWithoutUserInput, {nullable:false})
    @Type(() => RoleCreateWithoutUserInput)
    create!: RoleCreateWithoutUserInput;
}
