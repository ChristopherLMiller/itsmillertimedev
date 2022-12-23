import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class MinecraftRuleCategoryScalarWhereWithAggregatesInput {

    @Field(() => [MinecraftRuleCategoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MinecraftRuleCategoryScalarWhereWithAggregatesInput>;

    @Field(() => [MinecraftRuleCategoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MinecraftRuleCategoryScalarWhereWithAggregatesInput>;

    @Field(() => [MinecraftRuleCategoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MinecraftRuleCategoryScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    icon?: StringWithAggregatesFilter;
}
