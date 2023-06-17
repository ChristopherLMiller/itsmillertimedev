import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ModelOrderByRelationAggregateInput } from '../model/model-order-by-relation-aggregate.input';

@InputType()
export class ManufacturerOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => ModelOrderByRelationAggregateInput, {nullable:true})
    Model?: ModelOrderByRelationAggregateInput;
}
