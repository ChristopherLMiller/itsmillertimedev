import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MinecraftRuleCategoryUpdateManyMutationInput } from './minecraft-rule-category-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MinecraftRuleCategoryWhereInput } from './minecraft-rule-category-where.input';

@ArgsType()
export class UpdateManyMinecraftRuleCategoryArgs {

    @Field(() => MinecraftRuleCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => MinecraftRuleCategoryUpdateManyMutationInput)
    data!: MinecraftRuleCategoryUpdateManyMutationInput;

    @Field(() => MinecraftRuleCategoryWhereInput, {nullable:true})
    @Type(() => MinecraftRuleCategoryWhereInput)
    where?: MinecraftRuleCategoryWhereInput;
}
