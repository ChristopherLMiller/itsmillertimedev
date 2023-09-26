import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GalleryTagWhereUniqueInput } from './gallery-tag-where-unique.input';
import { Type } from 'class-transformer';
import { GalleryTagUpdateWithoutGalleryInput } from './gallery-tag-update-without-gallery.input';

@InputType()
export class GalleryTagUpdateWithWhereUniqueWithoutGalleryInput {

    @Field(() => GalleryTagWhereUniqueInput, {nullable:false})
    @Type(() => GalleryTagWhereUniqueInput)
    where!: Prisma.AtLeast<GalleryTagWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => GalleryTagUpdateWithoutGalleryInput, {nullable:false})
    @Type(() => GalleryTagUpdateWithoutGalleryInput)
    data!: GalleryTagUpdateWithoutGalleryInput;
}
