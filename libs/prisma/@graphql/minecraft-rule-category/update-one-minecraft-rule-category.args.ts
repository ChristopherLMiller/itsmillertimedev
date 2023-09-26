import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MinecraftRuleCategoryUpdateInput } from './minecraft-rule-category-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { MinecraftRuleCategoryWhereUniqueInput } from './minecraft-rule-category-where-unique.input';

@ArgsType()
export class UpdateOneMinecraftRuleCategoryArgs {

    @Field(() => MinecraftRuleCategoryUpdateInput, {nullable:false})
    @Type(() => MinecraftRuleCategoryUpdateInput)
    data!: MinecraftRuleCategoryUpdateInput;

    @Field(() => MinecraftRuleCategoryWhereUniqueInput, {nullable:false})
    @Type(() => MinecraftRuleCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<MinecraftRuleCategoryWhereUniqueInput, 'id' | 'name'>;
}
