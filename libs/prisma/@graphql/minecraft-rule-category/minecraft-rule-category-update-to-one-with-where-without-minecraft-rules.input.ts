import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MinecraftRuleCategoryWhereInput } from './minecraft-rule-category-where.input';
import { Type } from 'class-transformer';
import { MinecraftRuleCategoryUpdateWithoutMinecraftRulesInput } from './minecraft-rule-category-update-without-minecraft-rules.input';

@InputType()
export class MinecraftRuleCategoryUpdateToOneWithWhereWithoutMinecraftRulesInput {

    @Field(() => MinecraftRuleCategoryWhereInput, {nullable:true})
    @Type(() => MinecraftRuleCategoryWhereInput)
    where?: MinecraftRuleCategoryWhereInput;

    @Field(() => MinecraftRuleCategoryUpdateWithoutMinecraftRulesInput, {nullable:false})
    @Type(() => MinecraftRuleCategoryUpdateWithoutMinecraftRulesInput)
    data!: MinecraftRuleCategoryUpdateWithoutMinecraftRulesInput;
}
