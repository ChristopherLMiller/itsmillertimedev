import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Marker {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => GraphQLDecimal, {nullable:false})
    lat!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    lon!: Decimal;

    @Field(() => String, {nullable:true})
    siteURL!: string | null;

    @Field(() => String, {nullable:true})
    galleryURL!: string | null;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Int, {nullable:false,defaultValue:0})
    rating!: number;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    visited!: boolean;

    @Field(() => Int, {nullable:false,defaultValue:0})
    visits!: number;
}
