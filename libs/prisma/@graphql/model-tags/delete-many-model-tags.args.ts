import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ModelTagsWhereInput } from './model-tags-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyModelTagsArgs {

    @Field(() => ModelTagsWhereInput, {nullable:true})
    @Type(() => ModelTagsWhereInput)
    where?: ModelTagsWhereInput;
}
