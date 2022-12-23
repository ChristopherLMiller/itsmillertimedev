import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MinecraftRuleWhereUniqueInput } from './minecraft-rule-where-unique.input';
import { Type } from 'class-transformer';
import { MinecraftRuleCreateInput } from './minecraft-rule-create.input';
import { MinecraftRuleUpdateInput } from './minecraft-rule-update.input';

@ArgsType()
export class UpsertOneMinecraftRuleArgs {

    @Field(() => MinecraftRuleWhereUniqueInput, {nullable:false})
    @Type(() => MinecraftRuleWhereUniqueInput)
    where!: MinecraftRuleWhereUniqueInput;

    @Field(() => MinecraftRuleCreateInput, {nullable:false})
    @Type(() => MinecraftRuleCreateInput)
    create!: MinecraftRuleCreateInput;

    @Field(() => MinecraftRuleUpdateInput, {nullable:false})
    @Type(() => MinecraftRuleUpdateInput)
    update!: MinecraftRuleUpdateInput;
}
