import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MinecraftRuleWhereUniqueInput } from './minecraft-rule-where-unique.input';
import { Type } from 'class-transformer';
import { MinecraftRuleCreateWithoutCategoryInput } from './minecraft-rule-create-without-category.input';

@InputType()
export class MinecraftRuleCreateOrConnectWithoutCategoryInput {

    @Field(() => MinecraftRuleWhereUniqueInput, {nullable:false})
    @Type(() => MinecraftRuleWhereUniqueInput)
    where!: MinecraftRuleWhereUniqueInput;

    @Field(() => MinecraftRuleCreateWithoutCategoryInput, {nullable:false})
    @Type(() => MinecraftRuleCreateWithoutCategoryInput)
    create!: MinecraftRuleCreateWithoutCategoryInput;
}
