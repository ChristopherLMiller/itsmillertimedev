import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MarkerSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    lat?: true;

    @Field(() => Boolean, {nullable:true})
    lon?: true;

    @Field(() => Boolean, {nullable:true})
    rating?: true;

    @Field(() => Boolean, {nullable:true})
    visits?: true;
}
