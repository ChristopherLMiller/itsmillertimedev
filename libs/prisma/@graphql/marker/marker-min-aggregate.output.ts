import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class MarkerMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    lat?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    lon?: Decimal;

    @Field(() => String, {nullable:true})
    siteURL?: string;

    @Field(() => String, {nullable:true})
    galleryURL?: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => Int, {nullable:true})
    rating?: number;

    @Field(() => Boolean, {nullable:true})
    visited?: boolean;

    @Field(() => Int, {nullable:true})
    visits?: number;
}
