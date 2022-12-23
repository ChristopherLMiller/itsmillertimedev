import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GalleryImageWhereInput } from './gallery-image-where.input';

@InputType()
export class GalleryImageListRelationFilter {

    @Field(() => GalleryImageWhereInput, {nullable:true})
    every?: GalleryImageWhereInput;

    @Field(() => GalleryImageWhereInput, {nullable:true})
    some?: GalleryImageWhereInput;

    @Field(() => GalleryImageWhereInput, {nullable:true})
    none?: GalleryImageWhereInput;
}
