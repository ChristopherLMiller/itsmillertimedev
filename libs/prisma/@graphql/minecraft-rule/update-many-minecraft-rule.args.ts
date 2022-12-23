import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MinecraftRuleUpdateManyMutationInput } from './minecraft-rule-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MinecraftRuleWhereInput } from './minecraft-rule-where.input';

@ArgsType()
export class UpdateManyMinecraftRuleArgs {

    @Field(() => MinecraftRuleUpdateManyMutationInput, {nullable:false})
    @Type(() => MinecraftRuleUpdateManyMutationInput)
    data!: MinecraftRuleUpdateManyMutationInput;

    @Field(() => MinecraftRuleWhereInput, {nullable:true})
    @Type(() => MinecraftRuleWhereInput)
    where?: MinecraftRuleWhereInput;
}
