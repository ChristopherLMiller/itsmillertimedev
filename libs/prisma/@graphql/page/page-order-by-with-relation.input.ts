import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ImageOrderByWithRelationInput } from '../image/image-order-by-with-relation.input';

@InputType()
export class PageOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    summary?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ImageOrderByWithRelationInput, {nullable:true})
    featuredImage?: ImageOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    imagePublic_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isPublic?: keyof typeof SortOrder;
}
