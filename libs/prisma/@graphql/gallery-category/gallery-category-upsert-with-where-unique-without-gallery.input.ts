import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GalleryCategoryWhereUniqueInput } from './gallery-category-where-unique.input';
import { Type } from 'class-transformer';
import { GalleryCategoryUpdateWithoutGalleryInput } from './gallery-category-update-without-gallery.input';
import { GalleryCategoryCreateWithoutGalleryInput } from './gallery-category-create-without-gallery.input';

@InputType()
export class GalleryCategoryUpsertWithWhereUniqueWithoutGalleryInput {

    @Field(() => GalleryCategoryWhereUniqueInput, {nullable:false})
    @Type(() => GalleryCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<GalleryCategoryWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => GalleryCategoryUpdateWithoutGalleryInput, {nullable:false})
    @Type(() => GalleryCategoryUpdateWithoutGalleryInput)
    update!: GalleryCategoryUpdateWithoutGalleryInput;

    @Field(() => GalleryCategoryCreateWithoutGalleryInput, {nullable:false})
    @Type(() => GalleryCategoryCreateWithoutGalleryInput)
    create!: GalleryCategoryCreateWithoutGalleryInput;
}
