import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ModelCount {

    @Field(() => Int, {nullable:false})
    tags?: number;

    @Field(() => Int, {nullable:false})
    images?: number;
}
