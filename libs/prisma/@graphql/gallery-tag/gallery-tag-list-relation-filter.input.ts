import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GalleryTagWhereInput } from './gallery-tag-where.input';

@InputType()
export class GalleryTagListRelationFilter {

    @Field(() => GalleryTagWhereInput, {nullable:true})
    every?: GalleryTagWhereInput;

    @Field(() => GalleryTagWhereInput, {nullable:true})
    some?: GalleryTagWhereInput;

    @Field(() => GalleryTagWhereInput, {nullable:true})
    none?: GalleryTagWhereInput;
}
