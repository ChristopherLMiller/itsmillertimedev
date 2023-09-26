import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MinecraftRuleWhereUniqueInput } from './minecraft-rule-where-unique.input';
import { Type } from 'class-transformer';
import { MinecraftRuleUpdateWithoutCategoryInput } from './minecraft-rule-update-without-category.input';

@InputType()
export class MinecraftRuleUpdateWithWhereUniqueWithoutCategoryInput {

    @Field(() => MinecraftRuleWhereUniqueInput, {nullable:false})
    @Type(() => MinecraftRuleWhereUniqueInput)
    where!: Prisma.AtLeast<MinecraftRuleWhereUniqueInput, 'id'>;

    @Field(() => MinecraftRuleUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => MinecraftRuleUpdateWithoutCategoryInput)
    data!: MinecraftRuleUpdateWithoutCategoryInput;
}
