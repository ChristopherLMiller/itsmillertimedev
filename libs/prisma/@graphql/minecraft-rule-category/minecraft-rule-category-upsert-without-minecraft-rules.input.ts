import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MinecraftRuleCategoryUpdateWithoutMinecraftRulesInput } from './minecraft-rule-category-update-without-minecraft-rules.input';
import { Type } from 'class-transformer';
import { MinecraftRuleCategoryCreateWithoutMinecraftRulesInput } from './minecraft-rule-category-create-without-minecraft-rules.input';
import { MinecraftRuleCategoryWhereInput } from './minecraft-rule-category-where.input';

@InputType()
export class MinecraftRuleCategoryUpsertWithoutMinecraftRulesInput {

    @Field(() => MinecraftRuleCategoryUpdateWithoutMinecraftRulesInput, {nullable:false})
    @Type(() => MinecraftRuleCategoryUpdateWithoutMinecraftRulesInput)
    update!: MinecraftRuleCategoryUpdateWithoutMinecraftRulesInput;

    @Field(() => MinecraftRuleCategoryCreateWithoutMinecraftRulesInput, {nullable:false})
    @Type(() => MinecraftRuleCategoryCreateWithoutMinecraftRulesInput)
    create!: MinecraftRuleCategoryCreateWithoutMinecraftRulesInput;

    @Field(() => MinecraftRuleCategoryWhereInput, {nullable:true})
    @Type(() => MinecraftRuleCategoryWhereInput)
    where?: MinecraftRuleCategoryWhereInput;
}
