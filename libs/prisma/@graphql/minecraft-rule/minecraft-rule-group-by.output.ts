import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MinecraftRuleCountAggregate } from './minecraft-rule-count-aggregate.output';
import { MinecraftRuleAvgAggregate } from './minecraft-rule-avg-aggregate.output';
import { MinecraftRuleSumAggregate } from './minecraft-rule-sum-aggregate.output';
import { MinecraftRuleMinAggregate } from './minecraft-rule-min-aggregate.output';
import { MinecraftRuleMaxAggregate } from './minecraft-rule-max-aggregate.output';

@ObjectType()
export class MinecraftRuleGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Int, {nullable:false})
    categoryId!: number;

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
