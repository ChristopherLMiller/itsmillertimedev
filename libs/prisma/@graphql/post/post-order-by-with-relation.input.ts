import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ImageOrderByWithRelationInput } from '../image/image-order-by-with-relation.input';
import { PostCategoryOrderByWithRelationInput } from '../post-category/post-category-order-by-with-relation.input';
import { PostTagOrderByRelationAggregateInput } from '../post-tag/post-tag-order-by-relation-aggregate.input';

@InputType()
export class PostOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    metaTitle?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    summary?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    wordCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    published?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    publishedAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    imagePublic_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    postCategoryId?: keyof typeof SortOrder;

    @Field(() => ImageOrderByWithRelationInput, {nullable:true})
    featuredImage?: ImageOrderByWithRelationInput;

    @Field(() => PostCategoryOrderByWithRelationInput, {nullable:true})
    category?: PostCategoryOrderByWithRelationInput;

    @Field(() => PostTagOrderByRelationAggregateInput, {nullable:true})
    tags?: PostTagOrderByRelationAggregateInput;
}
