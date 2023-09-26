import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GalleryTagWhereInput } from './gallery-tag-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { GalleryNullableRelationFilter } from '../gallery/gallery-nullable-relation-filter.input';

@InputType()
export class GalleryTagWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => [GalleryTagWhereInput], {nullable:true})
    AND?: Array<GalleryTagWhereInput>;

    @Field(() => [GalleryTagWhereInput], {nullable:true})
    OR?: Array<GalleryTagWhereInput>;

    @Field(() => [GalleryTagWhereInput], {nullable:true})
    NOT?: Array<GalleryTagWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    galleryId?: IntNullableFilter;

    @Field(() => GalleryNullableRelationFilter, {nullable:true})
    Gallery?: GalleryNullableRelationFilter;
}
