import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class AlertCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    validUntil!: Date | string;

    @Field(() => Date, {nullable:false})
    startDate!: Date | string;

    @Field(() => Int, {nullable:true})
    AlertAttempts?: number;
}
