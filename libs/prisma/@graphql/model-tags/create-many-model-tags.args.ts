import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ModelTagsCreateManyInput } from './model-tags-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyModelTagsArgs {

    @Field(() => [ModelTagsCreateManyInput], {nullable:false})
    @Type(() => ModelTagsCreateManyInput)
    data!: Array<ModelTagsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
