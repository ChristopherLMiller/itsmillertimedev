import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MinecraftRuleCategoryCreateWithoutMinecraftRulesInput } from './minecraft-rule-category-create-without-minecraft-rules.input';
import { Type } from 'class-transformer';
import { MinecraftRuleCategoryCreateOrConnectWithoutMinecraftRulesInput } from './minecraft-rule-category-create-or-connect-without-minecraft-rules.input';
import { MinecraftRuleCategoryUpsertWithoutMinecraftRulesInput } from './minecraft-rule-category-upsert-without-minecraft-rules.input';
import { MinecraftRuleCategoryWhereUniqueInput } from './minecraft-rule-category-where-unique.input';
import { MinecraftRuleCategoryUpdateWithoutMinecraftRulesInput } from './minecraft-rule-category-update-without-minecraft-rules.input';

@InputType()
export class MinecraftRuleCategoryUpdateOneRequiredWithoutMinecraftRulesNestedInput {

    @Field(() => MinecraftRuleCategoryCreateWithoutMinecraftRulesInput, {nullable:true})
    @Type(() => MinecraftRuleCategoryCreateWithoutMinecraftRulesInput)
    create?: MinecraftRuleCategoryCreateWithoutMinecraftRulesInput;

    @Field(() => MinecraftRuleCategoryCreateOrConnectWithoutMinecraftRulesInput, {nullable:true})
    @Type(() => MinecraftRuleCategoryCreateOrConnectWithoutMinecraftRulesInput)
    connectOrCreate?: MinecraftRuleCategoryCreateOrConnectWithoutMinecraftRulesInput;

    @Field(() => MinecraftRuleCategoryUpsertWithoutMinecraftRulesInput, {nullable:true})
    @Type(() => MinecraftRuleCategoryUpsertWithoutMinecraftRulesInput)
    upsert?: MinecraftRuleCategoryUpsertWithoutMinecraftRulesInput;

    @Field(() => MinecraftRuleCategoryWhereUniqueInput, {nullable:true})
    @Type(() => MinecraftRuleCategoryWhereUniqueInput)
    connect?: MinecraftRuleCategoryWhereUniqueInput;

    @Field(() => MinecraftRuleCategoryUpdateWithoutMinecraftRulesInput, {nullable:true})
    @Type(() => MinecraftRuleCategoryUpdateWithoutMinecraftRulesInput)
    update?: MinecraftRuleCategoryUpdateWithoutMinecraftRulesInput;
}
