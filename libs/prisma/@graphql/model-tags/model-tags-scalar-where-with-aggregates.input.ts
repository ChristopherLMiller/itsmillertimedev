import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class ModelTagsScalarWhereWithAggregatesInput {

    @Field(() => [ModelTagsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ModelTagsScalarWhereWithAggregatesInput>;

    @Field(() => [ModelTagsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ModelTagsScalarWhereWithAggregatesInput>;

    @Field(() => [ModelTagsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ModelTagsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    slug?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    modelId?: IntNullableWithAggregatesFilter;
}
