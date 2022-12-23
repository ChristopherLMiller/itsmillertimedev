import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MinecraftRuleUpdateInput } from './minecraft-rule-update.input';
import { Type } from 'class-transformer';
import { MinecraftRuleWhereUniqueInput } from './minecraft-rule-where-unique.input';

@ArgsType()
export class UpdateOneMinecraftRuleArgs {

    @Field(() => MinecraftRuleUpdateInput, {nullable:false})
    @Type(() => MinecraftRuleUpdateInput)
    data!: MinecraftRuleUpdateInput;

    @Field(() => MinecraftRuleWhereUniqueInput, {nullable:false})
    @Type(() => MinecraftRuleWhereUniqueInput)
    where!: MinecraftRuleWhereUniqueInput;
}
