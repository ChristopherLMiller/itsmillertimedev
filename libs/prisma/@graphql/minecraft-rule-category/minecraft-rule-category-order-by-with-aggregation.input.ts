import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MinecraftRuleCategoryCountOrderByAggregateInput } from './minecraft-rule-category-count-order-by-aggregate.input';
import { MinecraftRuleCategoryAvgOrderByAggregateInput } from './minecraft-rule-category-avg-order-by-aggregate.input';
import { MinecraftRuleCategoryMaxOrderByAggregateInput } from './minecraft-rule-category-max-order-by-aggregate.input';
import { MinecraftRuleCategoryMinOrderByAggregateInput } from './minecraft-rule-category-min-order-by-aggregate.input';
import { MinecraftRuleCategorySumOrderByAggregateInput } from './minecraft-rule-category-sum-order-by-aggregate.input';

@InputType()
export class MinecraftRuleCategoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    icon?: keyof typeof SortOrder;

    @Field(() => MinecraftRuleCategoryCountOrderByAggregateInput, {nullable:true})
    _count?: MinecraftRuleCategoryCountOrderByAggregateInput;

    @Field(() => MinecraftRuleCategoryAvgOrderByAggregateInput, {nullable:true})
    _avg?: MinecraftRuleCategoryAvgOrderByAggregateInput;

    @Field(() => MinecraftRuleCategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: MinecraftRuleCategoryMaxOrderByAggregateInput;

    @Field(() => MinecraftRuleCategoryMinOrderByAggregateInput, {nullable:true})
    _min?: MinecraftRuleCategoryMinOrderByAggregateInput;

    @Field(() => MinecraftRuleCategorySumOrderByAggregateInput, {nullable:true})
    _sum?: MinecraftRuleCategorySumOrderByAggregateInput;
}
