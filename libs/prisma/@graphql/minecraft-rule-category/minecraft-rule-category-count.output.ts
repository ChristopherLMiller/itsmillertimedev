import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MinecraftRuleCategoryCount {

    @Field(() => Int, {nullable:false})
    MinecraftRules?: number;
}
