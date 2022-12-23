import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MinecraftRuleCategoryWhereUniqueInput } from './minecraft-rule-category-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueMinecraftRuleCategoryOrThrowArgs {

    @Field(() => MinecraftRuleCategoryWhereUniqueInput, {nullable:false})
    @Type(() => MinecraftRuleCategoryWhereUniqueInput)
    where!: MinecraftRuleCategoryWhereUniqueInput;
}
