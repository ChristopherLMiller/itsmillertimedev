import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GalleryTagWhereUniqueInput } from './gallery-tag-where-unique.input';
import { Type } from 'class-transformer';
import { GalleryTagCreateWithoutGalleryInput } from './gallery-tag-create-without-gallery.input';

@InputType()
export class GalleryTagCreateOrConnectWithoutGalleryInput {

    @Field(() => GalleryTagWhereUniqueInput, {nullable:false})
    @Type(() => GalleryTagWhereUniqueInput)
    where!: Prisma.AtLeast<GalleryTagWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => GalleryTagCreateWithoutGalleryInput, {nullable:false})
    @Type(() => GalleryTagCreateWithoutGalleryInput)
    create!: GalleryTagCreateWithoutGalleryInput;
}
