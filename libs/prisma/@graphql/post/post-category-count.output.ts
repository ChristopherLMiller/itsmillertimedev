import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PostCategoryCount {

    @Field(() => Int, {nullable:false})
    posts?: number;
}
