import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MinecraftRuleCreateManyCategoryInput } from './minecraft-rule-create-many-category.input';
import { Type } from 'class-transformer';

@InputType()
export class MinecraftRuleCreateManyCategoryInputEnvelope {

    @Field(() => [MinecraftRuleCreateManyCategoryInput], {nullable:false})
    @Type(() => MinecraftRuleCreateManyCategoryInput)
    data!: Array<MinecraftRuleCreateManyCategoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
