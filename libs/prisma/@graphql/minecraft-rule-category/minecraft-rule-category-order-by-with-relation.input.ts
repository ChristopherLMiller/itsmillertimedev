import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MinecraftRuleOrderByRelationAggregateInput } from '../minecraft-rule/minecraft-rule-order-by-relation-aggregate.input';

@InputType()
export class MinecraftRuleCategoryOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    icon?: keyof typeof SortOrder;

    @Field(() => MinecraftRuleOrderByRelationAggregateInput, {nullable:true})
    MinecraftRules?: MinecraftRuleOrderByRelationAggregateInput;
}
