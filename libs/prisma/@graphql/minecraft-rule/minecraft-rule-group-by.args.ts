import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MinecraftRuleWhereInput } from './minecraft-rule-where.input';
import { Type } from 'class-transformer';
import { MinecraftRuleOrderByWithAggregationInput } from './minecraft-rule-order-by-with-aggregation.input';
import { MinecraftRuleScalarFieldEnum } from './minecraft-rule-scalar-field.enum';
import { MinecraftRuleScalarWhereWithAggregatesInput } from './minecraft-rule-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MinecraftRuleCountAggregateInput } from './minecraft-rule-count-aggregate.input';
import { MinecraftRuleAvgAggregateInput } from './minecraft-rule-avg-aggregate.input';
import { MinecraftRuleSumAggregateInput } from './minecraft-rule-sum-aggregate.input';
import { MinecraftRuleMinAggregateInput } from './minecraft-rule-min-aggregate.input';
import { MinecraftRuleMaxAggregateInput } from './minecraft-rule-max-aggregate.input';

@ArgsType()
export class MinecraftRuleGroupByArgs {

    @Field(() => MinecraftRuleWhereInput, {nullable:true})
    @Type(() => MinecraftRuleWhereInput)
    where?: MinecraftRuleWhereInput;

    @Field(() => [MinecraftRuleOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MinecraftRuleOrderByWithAggregationInput>;

    @Field(() => [MinecraftRuleScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MinecraftRuleScalarFieldEnum>;

    @Field(() => MinecraftRuleScalarWhereWithAggregatesInput, {nullable:true})
    having?: MinecraftRuleScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MinecraftRuleCountAggregateInput, {nullable:true})
    _count?: MinecraftRuleCountAggregateInput;

    @Field(() => MinecraftRuleAvgAggregateInput, {nullable:true})
    _avg?: MinecraftRuleAvgAggregateInput;

    @Field(() => MinecraftRuleSumAggregateInput, {nullable:true})
    _sum?: MinecraftRuleSumAggregateInput;

    @Field(() => MinecraftRuleMinAggregateInput, {nullable:true})
    _min?: MinecraftRuleMinAggregateInput;

    @Field(() => MinecraftRuleMaxAggregateInput, {nullable:true})
    _max?: MinecraftRuleMaxAggregateInput;
}
