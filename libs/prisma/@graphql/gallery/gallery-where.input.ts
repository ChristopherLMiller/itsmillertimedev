import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumVisibilityFilter } from '../prisma/enum-visibility-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { GalleryCategoryListRelationFilter } from '../gallery-category/gallery-category-list-relation-filter.input';
import { GalleryTagListRelationFilter } from '../gallery-tag/gallery-tag-list-relation-filter.input';
import { GalleryImageListRelationFilter } from '../gallery-image/gallery-image-list-relation-filter.input';

@InputType()
export class GalleryWhereInput {

    @Field(() => [GalleryWhereInput], {nullable:true})
    AND?: Array<GalleryWhereInput>;

    @Field(() => [GalleryWhereInput], {nullable:true})
    OR?: Array<GalleryWhereInput>;

    @Field(() => [GalleryWhereInput], {nullable:true})
    NOT?: Array<GalleryWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    meta?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => EnumVisibilityFilter, {nullable:true})
    visibility?: EnumVisibilityFilter;

    @Field(() => BoolFilter, {nullable:true})
    isNsfw?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    image?: StringFilter;

    @Field(() => GalleryCategoryListRelationFilter, {nullable:true})
    categories?: GalleryCategoryListRelationFilter;

    @Field(() => GalleryTagListRelationFilter, {nullable:true})
    tags?: GalleryTagListRelationFilter;

    @Field(() => GalleryImageListRelationFilter, {nullable:true})
    images?: GalleryImageListRelationFilter;
}
