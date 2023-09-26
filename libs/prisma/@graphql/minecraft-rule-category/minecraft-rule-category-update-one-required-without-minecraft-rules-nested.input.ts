import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MinecraftRuleCategoryCreateWithoutMinecraftRulesInput } from './minecraft-rule-category-create-without-minecraft-rules.input';
import { Type } from 'class-transformer';
import { MinecraftRuleCategoryCreateOrConnectWithoutMinecraftRulesInput } from './minecraft-rule-category-create-or-connect-without-minecraft-rules.input';
import { MinecraftRuleCategoryUpsertWithoutMinecraftRulesInput } from './minecraft-rule-category-upsert-without-minecraft-rules.input';
import { Prisma } from '@prisma/client';
import { MinecraftRuleCategoryWhereUniqueInput } from './minecraft-rule-category-where-unique.input';
import { MinecraftRuleCategoryUpdateToOneWithWhereWithoutMinecraftRulesInput } from './minecraft-rule-category-update-to-one-with-where-without-minecraft-rules.input';

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
    connect?: Prisma.AtLeast<MinecraftRuleCategoryWhereUniqueInput, 'id' | 'name'>;

    @Field(() => MinecraftRuleCategoryUpdateToOneWithWhereWithoutMinecraftRulesInput, {nullable:true})
    @Type(() => MinecraftRuleCategoryUpdateToOneWithWhereWithoutMinecraftRulesInput)
    update?: MinecraftRuleCategoryUpdateToOneWithWhereWithoutMinecraftRulesInput;
}
