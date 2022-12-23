import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MinecraftRuleCategoryCreateManyInput } from './minecraft-rule-category-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMinecraftRuleCategoryArgs {

    @Field(() => [MinecraftRuleCategoryCreateManyInput], {nullable:false})
    @Type(() => MinecraftRuleCategoryCreateManyInput)
    data!: Array<MinecraftRuleCategoryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
