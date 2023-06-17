import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ModelTagsWhereInput } from './model-tags-where.input';

@InputType()
export class ModelTagsListRelationFilter {

    @Field(() => ModelTagsWhereInput, {nullable:true})
    every?: ModelTagsWhereInput;

    @Field(() => ModelTagsWhereInput, {nullable:true})
    some?: ModelTagsWhereInput;

    @Field(() => ModelTagsWhereInput, {nullable:true})
    none?: ModelTagsWhereInput;
}
