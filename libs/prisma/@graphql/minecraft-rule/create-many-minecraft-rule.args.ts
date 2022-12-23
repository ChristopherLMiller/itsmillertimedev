import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MinecraftRuleCreateManyInput } from './minecraft-rule-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMinecraftRuleArgs {

    @Field(() => [MinecraftRuleCreateManyInput], {nullable:false})
    @Type(() => MinecraftRuleCreateManyInput)
    data!: Array<MinecraftRuleCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
