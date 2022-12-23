import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ImageAvgAggregate {

    @Field(() => Float, {nullable:true})
    version?: number;

    @Field(() => Float, {nullable:true})
    width?: number;

    @Field(() => Float, {nullable:true})
    height?: number;

    @Field(() => Float, {nullable:true})
    bytes?: number;
}
