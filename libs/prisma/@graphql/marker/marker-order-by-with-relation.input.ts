import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';

@InputType()
export class MarkerOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lat?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lon?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    siteURL?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    galleryURL?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rating?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    visited?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    visits?: keyof typeof SortOrder;
}
