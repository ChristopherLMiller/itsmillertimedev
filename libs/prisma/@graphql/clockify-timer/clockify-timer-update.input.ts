import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class ClockifyTimerUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    projectId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    startTime?: StringFieldUpdateOperationsInput;
}
