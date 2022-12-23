import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MinecraftRuleCategoryWhereInput } from './minecraft-rule-category-where.input';
import { Type } from 'class-transformer';
import { MinecraftRuleCategoryOrderByWithRelationInput } from './minecraft-rule-category-order-by-with-relation.input';
import { MinecraftRuleCategoryWhereUniqueInput } from './minecraft-rule-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MinecraftRuleCategoryScalarFieldEnum } from './minecraft-rule-category-scalar-field.enum';

@ArgsType()
export class FindFirstMinecraftRuleCategoryArgs {

    @Field(() => MinecraftRuleCategoryWhereInput, {nullable:true})
    @Type(() => MinecraftRuleCategoryWhereInput)
    where?: MinecraftRuleCategoryWhereInput;

    @Field(() => [MinecraftRuleCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MinecraftRuleCategoryOrderByWithRelationInput>;

    @Field(() => MinecraftRuleCategoryWhereUniqueInput, {nullable:true})
    cursor?: MinecraftRuleCategoryWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MinecraftRuleCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MinecraftRuleCategoryScalarFieldEnum>;
}
