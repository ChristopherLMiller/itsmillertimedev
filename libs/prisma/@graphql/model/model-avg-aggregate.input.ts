import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ModelAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    yearReleased?: true;

    @Field(() => Boolean, {nullable:true})
    manufacturerId?: true;

    @Field(() => Boolean, {nullable:true})
    scaleId?: true;
}
