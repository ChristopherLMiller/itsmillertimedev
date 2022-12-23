import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MinecraftRuleCategoryCreateInput } from './minecraft-rule-category-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMinecraftRuleCategoryArgs {

    @Field(() => MinecraftRuleCategoryCreateInput, {nullable:false})
    @Type(() => MinecraftRuleCategoryCreateInput)
    data!: MinecraftRuleCategoryCreateInput;
}
