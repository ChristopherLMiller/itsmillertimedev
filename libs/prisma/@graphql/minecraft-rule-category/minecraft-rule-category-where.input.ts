import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { MinecraftRuleListRelationFilter } from '../minecraft-rule/minecraft-rule-list-relation-filter.input';

@InputType()
export class MinecraftRuleCategoryWhereInput {

    @Field(() => [MinecraftRuleCategoryWhereInput], {nullable:true})
    AND?: Array<MinecraftRuleCategoryWhereInput>;

    @Field(() => [MinecraftRuleCategoryWhereInput], {nullable:true})
    OR?: Array<MinecraftRuleCategoryWhereInput>;

    @Field(() => [MinecraftRuleCategoryWhereInput], {nullable:true})
    NOT?: Array<MinecraftRuleCategoryWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    icon?: StringFilter;

    @Field(() => MinecraftRuleListRelationFilter, {nullable:true})
    MinecraftRules?: MinecraftRuleListRelationFilter;
}
