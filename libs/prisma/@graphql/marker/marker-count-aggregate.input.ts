import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MarkerCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    lat?: true;

    @Field(() => Boolean, {nullable:true})
    lon?: true;

    @Field(() => Boolean, {nullable:true})
    siteURL?: true;

    @Field(() => Boolean, {nullable:true})
    galleryURL?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    rating?: true;

    @Field(() => Boolean, {nullable:true})
    visited?: true;

    @Field(() => Boolean, {nullable:true})
    visits?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
