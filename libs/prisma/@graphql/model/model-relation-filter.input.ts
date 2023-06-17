import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ModelWhereInput } from './model-where.input';

@InputType()
export class ModelRelationFilter {

    @Field(() => ModelWhereInput, {nullable:true})
    is?: ModelWhereInput;

    @Field(() => ModelWhereInput, {nullable:true})
    isNot?: ModelWhereInput;
}
