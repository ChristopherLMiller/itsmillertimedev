import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MinecraftRuleCategoryWhereInput } from './minecraft-rule-category-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { MinecraftRuleListRelationFilter } from '../minecraft-rule/minecraft-rule-list-relation-filter.input';

@InputType()
export class MinecraftRuleCategoryWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => [MinecraftRuleCategoryWhereInput], {nullable:true})
    AND?: Array<MinecraftRuleCategoryWhereInput>;

    @Field(() => [MinecraftRuleCategoryWhereInput], {nullable:true})
    OR?: Array<MinecraftRuleCategoryWhereInput>;

    @Field(() => [MinecraftRuleCategoryWhereInput], {nullable:true})
    NOT?: Array<MinecraftRuleCategoryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    icon?: StringFilter;

    @Field(() => MinecraftRuleListRelationFilter, {nullable:true})
    MinecraftRules?: MinecraftRuleListRelationFilter;
}
