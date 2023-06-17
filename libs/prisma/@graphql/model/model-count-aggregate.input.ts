import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ModelCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    slug?: true;

    @Field(() => Boolean, {nullable:true})
    completed?: true;

    @Field(() => Boolean, {nullable:true})
    visibility?: true;

    @Field(() => Boolean, {nullable:true})
    metaTitle?: true;

    @Field(() => Boolean, {nullable:true})
    summary?: true;

    @Field(() => Boolean, {nullable:true})
    featuredImage?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    clockifyProjectId?: true;

    @Field(() => Boolean, {nullable:true})
    contents?: true;

    @Field(() => Boolean, {nullable:true})
    yearReleased?: true;

    @Field(() => Boolean, {nullable:true})
    completedAt?: true;

    @Field(() => Boolean, {nullable:true})
    imagePublic_id?: true;

    @Field(() => Boolean, {nullable:true})
    manufacturerId?: true;

    @Field(() => Boolean, {nullable:true})
    scaleId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
