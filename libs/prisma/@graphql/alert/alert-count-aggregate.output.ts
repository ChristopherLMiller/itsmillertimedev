import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AlertCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    active!: number;

    @Field(() => Int, {nullable:false})
    validUntil!: number;

    @Field(() => Int, {nullable:false})
    startDate!: number;

    @Field(() => Int, {nullable:false})
    AlertAttempts!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
