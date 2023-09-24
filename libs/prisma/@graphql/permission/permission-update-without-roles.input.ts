import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class PermissionUpdateWithoutRolesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    node?: StringFieldUpdateOperationsInput;
}
