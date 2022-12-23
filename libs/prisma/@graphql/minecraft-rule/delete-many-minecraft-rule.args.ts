import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MinecraftRuleWhereInput } from './minecraft-rule-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMinecraftRuleArgs {

    @Field(() => MinecraftRuleWhereInput, {nullable:true})
    @Type(() => MinecraftRuleWhereInput)
    where?: MinecraftRuleWhereInput;
}
