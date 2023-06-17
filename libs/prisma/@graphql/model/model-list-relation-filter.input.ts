import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ModelWhereInput } from './model-where.input';

@InputType()
export class ModelListRelationFilter {

    @Field(() => ModelWhereInput, {nullable:true})
    every?: ModelWhereInput;

    @Field(() => ModelWhereInput, {nullable:true})
    some?: ModelWhereInput;

    @Field(() => ModelWhereInput, {nullable:true})
    none?: ModelWhereInput;
}
