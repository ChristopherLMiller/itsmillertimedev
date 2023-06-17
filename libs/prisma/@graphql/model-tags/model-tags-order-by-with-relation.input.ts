import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ModelOrderByWithRelationInput } from '../model/model-order-by-with-relation.input';

@InputType()
export class ModelTagsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => ModelOrderByWithRelationInput, {nullable:true})
    Model?: ModelOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    modelId?: keyof typeof SortOrder;
}
