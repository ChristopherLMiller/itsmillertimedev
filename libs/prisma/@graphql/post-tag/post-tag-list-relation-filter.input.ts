import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostTagWhereInput } from './post-tag-where.input';

@InputType()
export class PostTagListRelationFilter {

    @Field(() => PostTagWhereInput, {nullable:true})
    every?: PostTagWhereInput;

    @Field(() => PostTagWhereInput, {nullable:true})
    some?: PostTagWhereInput;

    @Field(() => PostTagWhereInput, {nullable:true})
    none?: PostTagWhereInput;
}
