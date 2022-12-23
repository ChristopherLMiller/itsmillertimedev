import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MinecraftRuleWhereInput } from './minecraft-rule-where.input';

@InputType()
export class MinecraftRuleListRelationFilter {

    @Field(() => MinecraftRuleWhereInput, {nullable:true})
    every?: MinecraftRuleWhereInput;

    @Field(() => MinecraftRuleWhereInput, {nullable:true})
    some?: MinecraftRuleWhereInput;

    @Field(() => MinecraftRuleWhereInput, {nullable:true})
    none?: MinecraftRuleWhereInput;
}
