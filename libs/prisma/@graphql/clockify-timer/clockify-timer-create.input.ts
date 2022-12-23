import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ClockifyTimerCreateInput {

    @Field(() => String, {nullable:false})
    projectId!: string;

    @Field(() => String, {nullable:false})
    startTime!: string;
}
