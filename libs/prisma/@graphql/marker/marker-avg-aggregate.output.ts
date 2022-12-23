import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class MarkerAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    lat?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    lon?: Decimal;

    @Field(() => Float, {nullable:true})
    rating?: number;

    @Field(() => Float, {nullable:true})
    visits?: number;
}
