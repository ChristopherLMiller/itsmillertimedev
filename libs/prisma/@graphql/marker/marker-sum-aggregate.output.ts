import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class MarkerSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    lat?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    lon?: Decimal;

    @Field(() => Int, {nullable:true})
    rating?: number;

    @Field(() => Int, {nullable:true})
    visits?: number;
}
