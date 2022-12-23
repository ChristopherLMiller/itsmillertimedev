import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ClockifyTimerCreateManyInput {

    @Field(() => String, {nullable:false})
    projectId!: string;

    @Field(() => String, {nullable:false})
    startTime!: string;

    @Field(() => Int, {nullable:true})
    id?: number;
}
