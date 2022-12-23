import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MinecraftRuleCategoryWhereInput } from './minecraft-rule-category-where.input';

@InputType()
export class MinecraftRuleCategoryRelationFilter {

    @Field(() => MinecraftRuleCategoryWhereInput, {nullable:true})
    is?: MinecraftRuleCategoryWhereInput;

    @Field(() => MinecraftRuleCategoryWhereInput, {nullable:true})
    isNot?: MinecraftRuleCategoryWhereInput;
}
