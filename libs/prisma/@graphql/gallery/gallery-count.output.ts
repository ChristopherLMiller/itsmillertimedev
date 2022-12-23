import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class GalleryCount {

    @Field(() => Int, {nullable:false})
    categories?: number;

    @Field(() => Int, {nullable:false})
    tags?: number;

    @Field(() => Int, {nullable:false})
    images?: number;
}
