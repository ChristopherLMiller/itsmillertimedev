import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ModelOrderByWithRelationInput } from '../model/model-order-by-with-relation.input';

@InputType()
export class ModelTagsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    modelId?: SortOrderInput;

    @Field(() => ModelOrderByWithRelationInput, {nullable:true})
    Model?: ModelOrderByWithRelationInput;
}
