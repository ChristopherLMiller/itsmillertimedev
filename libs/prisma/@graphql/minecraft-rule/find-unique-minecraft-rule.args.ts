import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MinecraftRuleWhereUniqueInput } from './minecraft-rule-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueMinecraftRuleArgs {

    @Field(() => MinecraftRuleWhereUniqueInput, {nullable:false})
    @Type(() => MinecraftRuleWhereUniqueInput)
    where!: Prisma.AtLeast<MinecraftRuleWhereUniqueInput, 'id'>;
}
