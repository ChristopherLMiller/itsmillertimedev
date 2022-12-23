import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MinecraftRuleCategoryCountAggregate } from './minecraft-rule-category-count-aggregate.output';
import { MinecraftRuleCategoryAvgAggregate } from './minecraft-rule-category-avg-aggregate.output';
import { MinecraftRuleCategorySumAggregate } from './minecraft-rule-category-sum-aggregate.output';
import { MinecraftRuleCategoryMinAggregate } from './minecraft-rule-category-min-aggregate.output';
import { MinecraftRuleCategoryMaxAggregate } from './minecraft-rule-category-max-aggregate.output';

@ObjectType()
export class MinecraftRuleCategoryGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    icon!: string;

    @Field(() => MinecraftRuleCategoryCountAggregate, {nullable:true})
    _count?: MinecraftRuleCategoryCountAggregate;

    @Field(() => MinecraftRuleCategoryAvgAggregate, {nullable:true})
    _avg?: MinecraftRuleCategoryAvgAggregate;

    @Field(() => MinecraftRuleCategorySumAggregate, {nullable:true})
    _sum?: MinecraftRuleCategorySumAggregate;

    @Field(() => MinecraftRuleCategoryMinAggregate, {nullable:true})
    _min?: MinecraftRuleCategoryMinAggregate;

    @Field(() => MinecraftRuleCategoryMaxAggregate, {nullable:true})
    _max?: MinecraftRuleCategoryMaxAggregate;
}
