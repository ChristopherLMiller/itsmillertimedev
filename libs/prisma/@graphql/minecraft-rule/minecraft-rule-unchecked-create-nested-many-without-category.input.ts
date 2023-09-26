import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MinecraftRuleCreateWithoutCategoryInput } from './minecraft-rule-create-without-category.input';
import { Type } from 'class-transformer';
import { MinecraftRuleCreateOrConnectWithoutCategoryInput } from './minecraft-rule-create-or-connect-without-category.input';
import { MinecraftRuleCreateManyCategoryInputEnvelope } from './minecraft-rule-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MinecraftRuleWhereUniqueInput } from './minecraft-rule-where-unique.input';

@InputType()
export class MinecraftRuleUncheckedCreateNestedManyWithoutCategoryInput {

    @Field(() => [MinecraftRuleCreateWithoutCategoryInput], {nullable:true})
    @Type(() => MinecraftRuleCreateWithoutCategoryInput)
    create?: Array<MinecraftRuleCreateWithoutCategoryInput>;

    @Field(() => [MinecraftRuleCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => MinecraftRuleCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<MinecraftRuleCreateOrConnectWithoutCategoryInput>;

    @Field(() => MinecraftRuleCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => MinecraftRuleCreateManyCategoryInputEnvelope)
    createMany?: MinecraftRuleCreateManyCategoryInputEnvelope;

    @Field(() => [MinecraftRuleWhereUniqueInput], {nullable:true})
    @Type(() => MinecraftRuleWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MinecraftRuleWhereUniqueInput, 'id'>>;
}
