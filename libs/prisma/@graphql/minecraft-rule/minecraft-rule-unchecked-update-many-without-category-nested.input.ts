import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MinecraftRuleCreateWithoutCategoryInput } from './minecraft-rule-create-without-category.input';
import { Type } from 'class-transformer';
import { MinecraftRuleCreateOrConnectWithoutCategoryInput } from './minecraft-rule-create-or-connect-without-category.input';
import { MinecraftRuleUpsertWithWhereUniqueWithoutCategoryInput } from './minecraft-rule-upsert-with-where-unique-without-category.input';
import { MinecraftRuleCreateManyCategoryInputEnvelope } from './minecraft-rule-create-many-category-input-envelope.input';
import { MinecraftRuleWhereUniqueInput } from './minecraft-rule-where-unique.input';
import { MinecraftRuleUpdateWithWhereUniqueWithoutCategoryInput } from './minecraft-rule-update-with-where-unique-without-category.input';
import { MinecraftRuleUpdateManyWithWhereWithoutCategoryInput } from './minecraft-rule-update-many-with-where-without-category.input';
import { MinecraftRuleScalarWhereInput } from './minecraft-rule-scalar-where.input';

@InputType()
export class MinecraftRuleUncheckedUpdateManyWithoutCategoryNestedInput {

    @Field(() => [MinecraftRuleCreateWithoutCategoryInput], {nullable:true})
    @Type(() => MinecraftRuleCreateWithoutCategoryInput)
    create?: Array<MinecraftRuleCreateWithoutCategoryInput>;

    @Field(() => [MinecraftRuleCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => MinecraftRuleCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<MinecraftRuleCreateOrConnectWithoutCategoryInput>;

    @Field(() => [MinecraftRuleUpsertWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => MinecraftRuleUpsertWithWhereUniqueWithoutCategoryInput)
    upsert?: Array<MinecraftRuleUpsertWithWhereUniqueWithoutCategoryInput>;

    @Field(() => MinecraftRuleCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => MinecraftRuleCreateManyCategoryInputEnvelope)
    createMany?: MinecraftRuleCreateManyCategoryInputEnvelope;

    @Field(() => [MinecraftRuleWhereUniqueInput], {nullable:true})
    @Type(() => MinecraftRuleWhereUniqueInput)
    set?: Array<MinecraftRuleWhereUniqueInput>;

    @Field(() => [MinecraftRuleWhereUniqueInput], {nullable:true})
    @Type(() => MinecraftRuleWhereUniqueInput)
    disconnect?: Array<MinecraftRuleWhereUniqueInput>;

    @Field(() => [MinecraftRuleWhereUniqueInput], {nullable:true})
    @Type(() => MinecraftRuleWhereUniqueInput)
    delete?: Array<MinecraftRuleWhereUniqueInput>;

    @Field(() => [MinecraftRuleWhereUniqueInput], {nullable:true})
    @Type(() => MinecraftRuleWhereUniqueInput)
    connect?: Array<MinecraftRuleWhereUniqueInput>;

    @Field(() => [MinecraftRuleUpdateWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => MinecraftRuleUpdateWithWhereUniqueWithoutCategoryInput)
    update?: Array<MinecraftRuleUpdateWithWhereUniqueWithoutCategoryInput>;

    @Field(() => [MinecraftRuleUpdateManyWithWhereWithoutCategoryInput], {nullable:true})
    @Type(() => MinecraftRuleUpdateManyWithWhereWithoutCategoryInput)
    updateMany?: Array<MinecraftRuleUpdateManyWithWhereWithoutCategoryInput>;

    @Field(() => [MinecraftRuleScalarWhereInput], {nullable:true})
    @Type(() => MinecraftRuleScalarWhereInput)
    deleteMany?: Array<MinecraftRuleScalarWhereInput>;
}
