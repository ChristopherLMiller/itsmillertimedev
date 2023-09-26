import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { GalleryNullableRelationFilter } from '../gallery/gallery-nullable-relation-filter.input';

@InputType()
export class GalleryTagWhereInput {

    @Field(() => [GalleryTagWhereInput], {nullable:true})
    AND?: Array<GalleryTagWhereInput>;

    @Field(() => [GalleryTagWhereInput], {nullable:true})
    OR?: Array<GalleryTagWhereInput>;

    @Field(() => [GalleryTagWhereInput], {nullable:true})
    NOT?: Array<GalleryTagWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    galleryId?: IntNullableFilter;

    @Field(() => GalleryNullableRelationFilter, {nullable:true})
    Gallery?: GalleryNullableRelationFilter;
}
