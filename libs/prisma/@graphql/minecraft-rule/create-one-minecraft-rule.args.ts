import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MinecraftRuleCreateInput } from './minecraft-rule-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMinecraftRuleArgs {

    @Field(() => MinecraftRuleCreateInput, {nullable:false})
    @Type(() => MinecraftRuleCreateInput)
    data!: MinecraftRuleCreateInput;
}
