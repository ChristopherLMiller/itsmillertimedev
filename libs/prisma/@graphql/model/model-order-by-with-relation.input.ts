import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ModelTagsOrderByRelationAggregateInput } from '../model-tags/model-tags-order-by-relation-aggregate.input';
import { ImageOrderByRelationAggregateInput } from '../image/image-order-by-relation-aggregate.input';
import { ManufacturerOrderByWithRelationInput } from '../manufacturer/manufacturer-order-by-with-relation.input';
import { ScaleOrderByWithRelationInput } from '../scale/scale-order-by-with-relation.input';

@InputType()
export class ModelOrderByWithRelationInput {

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

    @Field(() => SortOrderInput, {nullable:true})
    clockifyProjectId?: SortOrderInput;

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

    @Field(() => ModelTagsOrderByRelationAggregateInput, {nullable:true})
    tags?: ModelTagsOrderByRelationAggregateInput;

    @Field(() => ImageOrderByRelationAggregateInput, {nullable:true})
    images?: ImageOrderByRelationAggregateInput;

    @Field(() => ManufacturerOrderByWithRelationInput, {nullable:true})
    manufacturer?: ManufacturerOrderByWithRelationInput;

    @Field(() => ScaleOrderByWithRelationInput, {nullable:true})
    scale?: ScaleOrderByWithRelationInput;
}
