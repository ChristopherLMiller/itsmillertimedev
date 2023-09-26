import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GalleryCategoryWhereInput } from './gallery-category-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { GalleryNullableRelationFilter } from '../gallery/gallery-nullable-relation-filter.input';

@InputType()
export class GalleryCategoryWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => [GalleryCategoryWhereInput], {nullable:true})
    AND?: Array<GalleryCategoryWhereInput>;

    @Field(() => [GalleryCategoryWhereInput], {nullable:true})
    OR?: Array<GalleryCategoryWhereInput>;

    @Field(() => [GalleryCategoryWhereInput], {nullable:true})
    NOT?: Array<GalleryCategoryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    galleryId?: IntNullableFilter;

    @Field(() => GalleryNullableRelationFilter, {nullable:true})
    Gallery?: GalleryNullableRelationFilter;
}
