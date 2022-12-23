import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MinecraftRuleCountOrderByAggregateInput } from './minecraft-rule-count-order-by-aggregate.input';
import { MinecraftRuleAvgOrderByAggregateInput } from './minecraft-rule-avg-order-by-aggregate.input';
import { MinecraftRuleMaxOrderByAggregateInput } from './minecraft-rule-max-order-by-aggregate.input';
import { MinecraftRuleMinOrderByAggregateInput } from './minecraft-rule-min-order-by-aggregate.input';
import { MinecraftRuleSumOrderByAggregateInput } from './minecraft-rule-sum-order-by-aggregate.input';

@InputType()
export class MinecraftRuleOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;

    @Field(() => MinecraftRuleCountOrderByAggregateInput, {nullable:true})
    _count?: MinecraftRuleCountOrderByAggregateInput;

    @Field(() => MinecraftRuleAvgOrderByAggregateInput, {nullable:true})
    _avg?: MinecraftRuleAvgOrderByAggregateInput;

    @Field(() => MinecraftRuleMaxOrderByAggregateInput, {nullable:true})
    _max?: MinecraftRuleMaxOrderByAggregateInput;

    @Field(() => MinecraftRuleMinOrderByAggregateInput, {nullable:true})
    _min?: MinecraftRuleMinOrderByAggregateInput;

    @Field(() => MinecraftRuleSumOrderByAggregateInput, {nullable:true})
    _sum?: MinecraftRuleSumOrderByAggregateInput;
}
