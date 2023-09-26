import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MinecraftRuleCategoryWhereInput } from './minecraft-rule-category-where.input';
import { Type } from 'class-transformer';
import { MinecraftRuleCategoryOrderByWithRelationInput } from './minecraft-rule-category-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MinecraftRuleCategoryWhereUniqueInput } from './minecraft-rule-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MinecraftRuleCategoryCountAggregateInput } from './minecraft-rule-category-count-aggregate.input';
import { MinecraftRuleCategoryAvgAggregateInput } from './minecraft-rule-category-avg-aggregate.input';
import { MinecraftRuleCategorySumAggregateInput } from './minecraft-rule-category-sum-aggregate.input';
import { MinecraftRuleCategoryMinAggregateInput } from './minecraft-rule-category-min-aggregate.input';
import { MinecraftRuleCategoryMaxAggregateInput } from './minecraft-rule-category-max-aggregate.input';

@ArgsType()
export class MinecraftRuleCategoryAggregateArgs {

    @Field(() => MinecraftRuleCategoryWhereInput, {nullable:true})
    @Type(() => MinecraftRuleCategoryWhereInput)
    where?: MinecraftRuleCategoryWhereInput;

    @Field(() => [MinecraftRuleCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MinecraftRuleCategoryOrderByWithRelationInput>;

    @Field(() => MinecraftRuleCategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MinecraftRuleCategoryWhereUniqueInput, 'id' | 'name'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MinecraftRuleCategoryCountAggregateInput, {nullable:true})
    _count?: MinecraftRuleCategoryCountAggregateInput;

    @Field(() => MinecraftRuleCategoryAvgAggregateInput, {nullable:true})
    _avg?: MinecraftRuleCategoryAvgAggregateInput;

    @Field(() => MinecraftRuleCategorySumAggregateInput, {nullable:true})
    _sum?: MinecraftRuleCategorySumAggregateInput;

    @Field(() => MinecraftRuleCategoryMinAggregateInput, {nullable:true})
    _min?: MinecraftRuleCategoryMinAggregateInput;

    @Field(() => MinecraftRuleCategoryMaxAggregateInput, {nullable:true})
    _max?: MinecraftRuleCategoryMaxAggregateInput;
}
