import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AlertMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    active?: true;

    @Field(() => Boolean, {nullable:true})
    validUntil?: true;

    @Field(() => Boolean, {nullable:true})
    startDate?: true;

    @Field(() => Boolean, {nullable:true})
    AlertAttempts?: true;
}
