import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ModelTagsCreateInput } from './model-tags-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneModelTagsArgs {

    @Field(() => ModelTagsCreateInput, {nullable:false})
    @Type(() => ModelTagsCreateInput)
    data!: ModelTagsCreateInput;
}
