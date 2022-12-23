import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MinecraftRuleCategoryWhereInput } from './minecraft-rule-category-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMinecraftRuleCategoryArgs {

    @Field(() => MinecraftRuleCategoryWhereInput, {nullable:true})
    @Type(() => MinecraftRuleCategoryWhereInput)
    where?: MinecraftRuleCategoryWhereInput;
}
