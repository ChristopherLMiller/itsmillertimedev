import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MinecraftRuleWhereUniqueInput } from './minecraft-rule-where-unique.input';
import { Type } from 'class-transformer';
import { MinecraftRuleUpdateWithoutCategoryInput } from './minecraft-rule-update-without-category.input';
import { MinecraftRuleCreateWithoutCategoryInput } from './minecraft-rule-create-without-category.input';

@InputType()
export class MinecraftRuleUpsertWithWhereUniqueWithoutCategoryInput {

    @Field(() => MinecraftRuleWhereUniqueInput, {nullable:false})
    @Type(() => MinecraftRuleWhereUniqueInput)
    where!: MinecraftRuleWhereUniqueInput;

    @Field(() => MinecraftRuleUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => MinecraftRuleUpdateWithoutCategoryInput)
    update!: MinecraftRuleUpdateWithoutCategoryInput;

    @Field(() => MinecraftRuleCreateWithoutCategoryInput, {nullable:false})
    @Type(() => MinecraftRuleCreateWithoutCategoryInput)
    create!: MinecraftRuleCreateWithoutCategoryInput;
}
