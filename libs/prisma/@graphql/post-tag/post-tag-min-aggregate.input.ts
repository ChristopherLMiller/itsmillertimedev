import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PostTagMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    postId?: true;

    @Field(() => Boolean, {nullable:true})
    slug?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;
}
