import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ModelMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    completed?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    visibility?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    metaTitle?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    summary?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    featuredImage?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    clockifyProjectId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contents?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    yearReleased?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    completedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    imagePublic_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    manufacturerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    scaleId?: keyof typeof SortOrder;
}
