import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MinecraftRuleScalarWhereInput } from './minecraft-rule-scalar-where.input';
import { Type } from 'class-transformer';
import { MinecraftRuleUpdateManyMutationInput } from './minecraft-rule-update-many-mutation.input';

@InputType()
export class MinecraftRuleUpdateManyWithWhereWithoutCategoryInput {

    @Field(() => MinecraftRuleScalarWhereInput, {nullable:false})
    @Type(() => MinecraftRuleScalarWhereInput)
    where!: MinecraftRuleScalarWhereInput;

    @Field(() => MinecraftRuleUpdateManyMutationInput, {nullable:false})
    @Type(() => MinecraftRuleUpdateManyMutationInput)
    data!: MinecraftRuleUpdateManyMutationInput;
}
