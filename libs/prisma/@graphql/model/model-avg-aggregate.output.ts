import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ModelAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    yearReleased?: number;

    @Field(() => Float, {nullable:true})
    manufacturerId?: number;

    @Field(() => Float, {nullable:true})
    scaleId?: number;
}
