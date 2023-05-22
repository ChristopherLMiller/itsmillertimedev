import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PageWhereInput } from './page-where.input';

@InputType()
export class PageListRelationFilter {

    @Field(() => PageWhereInput, {nullable:true})
    every?: PageWhereInput;

    @Field(() => PageWhereInput, {nullable:true})
    some?: PageWhereInput;

    @Field(() => PageWhereInput, {nullable:true})
    none?: PageWhereInput;
}
