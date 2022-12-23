import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ClockifyTimerMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    projectId?: true;

    @Field(() => Boolean, {nullable:true})
    startTime?: true;

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
