import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Alert {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    validUntil!: Date;

    @Field(() => Date, {nullable:false})
    startDate!: Date;

    @Field(() => Int, {nullable:false,defaultValue:1})
    AlertAttempts!: number;
}
