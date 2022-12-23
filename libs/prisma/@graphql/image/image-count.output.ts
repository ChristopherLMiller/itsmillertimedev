import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ImageCount {

    @Field(() => Int, {nullable:false})
    Post?: number;
}
