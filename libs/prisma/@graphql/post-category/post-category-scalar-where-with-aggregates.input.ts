import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class PostCategoryScalarWhereWithAggregatesInput {

    @Field(() => [PostCategoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PostCategoryScalarWhereWithAggregatesInput>;

    @Field(() => [PostCategoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PostCategoryScalarWhereWithAggregatesInput>;

    @Field(() => [PostCategoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PostCategoryScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    slug?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;
}
