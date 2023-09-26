import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MinecraftRuleWhereInput } from './minecraft-rule-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { MinecraftRuleCategoryRelationFilter } from '../minecraft-rule-category/minecraft-rule-category-relation-filter.input';

@InputType()
export class MinecraftRuleWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [MinecraftRuleWhereInput], {nullable:true})
    AND?: Array<MinecraftRuleWhereInput>;

    @Field(() => [MinecraftRuleWhereInput], {nullable:true})
    OR?: Array<MinecraftRuleWhereInput>;

    @Field(() => [MinecraftRuleWhereInput], {nullable:true})
    NOT?: Array<MinecraftRuleWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    categoryId?: IntFilter;

    @Field(() => MinecraftRuleCategoryRelationFilter, {nullable:true})
    category?: MinecraftRuleCategoryRelationFilter;
}
