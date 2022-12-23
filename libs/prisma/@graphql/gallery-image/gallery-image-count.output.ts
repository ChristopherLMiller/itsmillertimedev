import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class GalleryImageCount {

    @Field(() => Int, {nullable:false})
    galleries?: number;
}
