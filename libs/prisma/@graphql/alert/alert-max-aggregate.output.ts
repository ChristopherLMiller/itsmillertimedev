import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AlertMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Date, {nullable:true})
    validUntil?: Date | string;

    @Field(() => Date, {nullable:true})
    startDate?: Date | string;

    @Field(() => Int, {nullable:true})
    AlertAttempts?: number;
}
