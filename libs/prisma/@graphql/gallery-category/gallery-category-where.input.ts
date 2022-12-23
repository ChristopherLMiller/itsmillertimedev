import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { GalleryRelationFilter } from '../gallery/gallery-relation-filter.input';

@InputType()
export class GalleryCategoryWhereInput {

    @Field(() => [GalleryCategoryWhereInput], {nullable:true})
    AND?: Array<GalleryCategoryWhereInput>;

    @Field(() => [GalleryCategoryWhereInput], {nullable:true})
    OR?: Array<GalleryCategoryWhereInput>;

    @Field(() => [GalleryCategoryWhereInput], {nullable:true})
    NOT?: Array<GalleryCategoryWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    galleryId?: IntNullableFilter;

    @Field(() => GalleryRelationFilter, {nullable:true})
    Gallery?: GalleryRelationFilter;
}
