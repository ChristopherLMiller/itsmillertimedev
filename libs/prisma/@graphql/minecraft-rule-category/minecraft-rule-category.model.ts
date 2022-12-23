import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { MinecraftRule } from '../minecraft-rule/minecraft-rule.model';
import { MinecraftRuleCategoryCount } from '../minecraft-rule/minecraft-rule-category-count.output';

@ObjectType()
export class MinecraftRuleCategory {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    icon!: string;

    @Field(() => [MinecraftRule], {nullable:true})
    MinecraftRules?: Array<MinecraftRule>;

    @Field(() => MinecraftRuleCategoryCount, {nullable:false})
    _count?: MinecraftRuleCategoryCount;
}
