import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MinecraftRuleCategoryWhereUniqueInput } from './minecraft-rule-category-where-unique.input';
import { Type } from 'class-transformer';
import { MinecraftRuleCategoryCreateInput } from './minecraft-rule-category-create.input';
import { MinecraftRuleCategoryUpdateInput } from './minecraft-rule-category-update.input';

@ArgsType()
export class UpsertOneMinecraftRuleCategoryArgs {

    @Field(() => MinecraftRuleCategoryWhereUniqueInput, {nullable:false})
    @Type(() => MinecraftRuleCategoryWhereUniqueInput)
    where!: MinecraftRuleCategoryWhereUniqueInput;

    @Field(() => MinecraftRuleCategoryCreateInput, {nullable:false})
    @Type(() => MinecraftRuleCategoryCreateInput)
    create!: MinecraftRuleCategoryCreateInput;

    @Field(() => MinecraftRuleCategoryUpdateInput, {nullable:false})
    @Type(() => MinecraftRuleCategoryUpdateInput)
    update!: MinecraftRuleCategoryUpdateInput;
}
