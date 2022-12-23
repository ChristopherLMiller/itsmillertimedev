import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MinecraftRuleCategoryWhereInput } from './minecraft-rule-category-where.input';
import { Type } from 'class-transformer';
import { MinecraftRuleCategoryOrderByWithAggregationInput } from './minecraft-rule-category-order-by-with-aggregation.input';
import { MinecraftRuleCategoryScalarFieldEnum } from './minecraft-rule-category-scalar-field.enum';
import { MinecraftRuleCategoryScalarWhereWithAggregatesInput } from './minecraft-rule-category-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MinecraftRuleCategoryCountAggregateInput } from './minecraft-rule-category-count-aggregate.input';
import { MinecraftRuleCategoryAvgAggregateInput } from './minecraft-rule-category-avg-aggregate.input';
import { MinecraftRuleCategorySumAggregateInput } from './minecraft-rule-category-sum-aggregate.input';
import { MinecraftRuleCategoryMinAggregateInput } from './minecraft-rule-category-min-aggregate.input';
import { MinecraftRuleCategoryMaxAggregateInput } from './minecraft-rule-category-max-aggregate.input';

@ArgsType()
export class MinecraftRuleCategoryGroupByArgs {

    @Field(() => MinecraftRuleCategoryWhereInput, {nullable:true})
    @Type(() => MinecraftRuleCategoryWhereInput)
    where?: MinecraftRuleCategoryWhereInput;

    @Field(() => [MinecraftRuleCategoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MinecraftRuleCategoryOrderByWithAggregationInput>;

    @Field(() => [MinecraftRuleCategoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MinecraftRuleCategoryScalarFieldEnum>;

    @Field(() => MinecraftRuleCategoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: MinecraftRuleCategoryScalarWhereWithAggregatesInput;

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
