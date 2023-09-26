import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GalleryTagWhereUniqueInput } from './gallery-tag-where-unique.input';
import { Type } from 'class-transformer';
import { GalleryTagUpdateWithoutGalleryInput } from './gallery-tag-update-without-gallery.input';
import { GalleryTagCreateWithoutGalleryInput } from './gallery-tag-create-without-gallery.input';

@InputType()
export class GalleryTagUpsertWithWhereUniqueWithoutGalleryInput {

    @Field(() => GalleryTagWhereUniqueInput, {nullable:false})
    @Type(() => GalleryTagWhereUniqueInput)
    where!: Prisma.AtLeast<GalleryTagWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => GalleryTagUpdateWithoutGalleryInput, {nullable:false})
    @Type(() => GalleryTagUpdateWithoutGalleryInput)
    update!: GalleryTagUpdateWithoutGalleryInput;

    @Field(() => GalleryTagCreateWithoutGalleryInput, {nullable:false})
    @Type(() => GalleryTagCreateWithoutGalleryInput)
    create!: GalleryTagCreateWithoutGalleryInput;
}
