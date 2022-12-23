import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GalleryWhereInput } from './gallery-where.input';

@InputType()
export class GalleryListRelationFilter {

    @Field(() => GalleryWhereInput, {nullable:true})
    every?: GalleryWhereInput;

    @Field(() => GalleryWhereInput, {nullable:true})
    some?: GalleryWhereInput;

    @Field(() => GalleryWhereInput, {nullable:true})
    none?: GalleryWhereInput;
}
