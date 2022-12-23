import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MinecraftRuleWhereInput } from './minecraft-rule-where.input';
import { Type } from 'class-transformer';
import { MinecraftRuleOrderByWithRelationInput } from './minecraft-rule-order-by-with-relation.input';
import { MinecraftRuleWhereUniqueInput } from './minecraft-rule-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MinecraftRuleScalarFieldEnum } from './minecraft-rule-scalar-field.enum';

@ArgsType()
export class FindFirstMinecraftRuleOrThrowArgs {

    @Field(() => MinecraftRuleWhereInput, {nullable:true})
    @Type(() => MinecraftRuleWhereInput)
    where?: MinecraftRuleWhereInput;

    @Field(() => [MinecraftRuleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MinecraftRuleOrderByWithRelationInput>;

    @Field(() => MinecraftRuleWhereUniqueInput, {nullable:true})
    cursor?: MinecraftRuleWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MinecraftRuleScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MinecraftRuleScalarFieldEnum>;
}
