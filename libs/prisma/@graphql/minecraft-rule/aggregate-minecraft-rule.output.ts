import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MinecraftRuleCountAggregate } from './minecraft-rule-count-aggregate.output';
import { MinecraftRuleAvgAggregate } from './minecraft-rule-avg-aggregate.output';
import { MinecraftRuleSumAggregate } from './minecraft-rule-sum-aggregate.output';
import { MinecraftRuleMinAggregate } from './minecraft-rule-min-aggregate.output';
import { MinecraftRuleMaxAggregate } from './minecraft-rule-max-aggregate.output';

@ObjectType()
export class AggregateMinecraftRule {

    @Field(() => MinecraftRuleCountAggregate, {nullable:true})
    _count?: MinecraftRuleCountAggregate;

    @Field(() => MinecraftRuleAvgAggregate, {nullable:true})
    _avg?: MinecraftRuleAvgAggregate;

    @Field(() => MinecraftRuleSumAggregate, {nullable:true})
    _sum?: MinecraftRuleSumAggregate;

    @Field(() => MinecraftRuleMinAggregate, {nullable:true})
    _min?: MinecraftRuleMinAggregate;

    @Field(() => MinecraftRuleMaxAggregate, {nullable:true})
    _max?: MinecraftRuleMaxAggregate;
}
