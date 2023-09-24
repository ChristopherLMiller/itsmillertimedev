import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { RoleUpdateOneRequiredWithoutUserNestedInput } from '../role/role-update-one-required-without-user-nested.input';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class UserUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    supabaseId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => RoleUpdateOneRequiredWithoutUserNestedInput, {nullable:true})
    role?: RoleUpdateOneRequiredWithoutUserNestedInput;

    @Field(() => GraphQLJSON, {nullable:true})
    meta?: any;
}
