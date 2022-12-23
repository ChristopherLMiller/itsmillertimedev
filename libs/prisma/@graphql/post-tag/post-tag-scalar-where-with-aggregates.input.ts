import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class PostTagScalarWhereWithAggregatesInput {

    @Field(() => [PostTagScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PostTagScalarWhereWithAggregatesInput>;

    @Field(() => [PostTagScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PostTagScalarWhereWithAggregatesInput>;

    @Field(() => [PostTagScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PostTagScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    postId?: IntNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    slug?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;
}
