import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MinecraftRuleWhereInput } from './minecraft-rule-where.input';
import { Type } from 'class-transformer';
import { MinecraftRuleOrderByWithRelationInput } from './minecraft-rule-order-by-with-relation.input';
import { MinecraftRuleWhereUniqueInput } from './minecraft-rule-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MinecraftRuleCountAggregateInput } from './minecraft-rule-count-aggregate.input';
import { MinecraftRuleAvgAggregateInput } from './minecraft-rule-avg-aggregate.input';
import { MinecraftRuleSumAggregateInput } from './minecraft-rule-sum-aggregate.input';
import { MinecraftRuleMinAggregateInput } from './minecraft-rule-min-aggregate.input';
import { MinecraftRuleMaxAggregateInput } from './minecraft-rule-max-aggregate.input';

@ArgsType()
export class MinecraftRuleAggregateArgs {

    @Field(() => MinecraftRuleWhereInput, {nullable:true})
    @Type(() => MinecraftRuleWhereInput)
    where?: MinecraftRuleWhereInput;

    @Field(() => [MinecraftRuleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MinecraftRuleOrderByWithRelationInput>;

    @Field(() => MinecraftRuleWhereUniqueInput, {nullable:true})
    cursor?: MinecraftRuleWhereUniqueInput;

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
