import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ClockifyTimerMinAggregate {

    @Field(() => String, {nullable:true})
    projectId?: string;

    @Field(() => String, {nullable:true})
    startTime?: string;

    @Field(() => Int, {nullable:true})
    id?: number;
}
