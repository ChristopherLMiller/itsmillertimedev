import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { RoleUpdateOneRequiredWithoutUserNestedInput } from '../role/role-update-one-required-without-user-nested.input';

@InputType()
export class UserUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    supabaseId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    meta?: any;

    @Field(() => RoleUpdateOneRequiredWithoutUserNestedInput, {nullable:true})
    role?: RoleUpdateOneRequiredWithoutUserNestedInput;
}
