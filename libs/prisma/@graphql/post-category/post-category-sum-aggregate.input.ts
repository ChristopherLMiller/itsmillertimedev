import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PostCategorySumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
