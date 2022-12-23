import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class GallerySumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
