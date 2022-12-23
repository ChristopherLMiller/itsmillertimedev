import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ClockifyTimerWhereUniqueInput {

    @Field(() => String, {nullable:true})
    projectId?: string;

    @Field(() => Int, {nullable:true})
    id?: number;
}
