import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GalleryCategoryWhereUniqueInput } from './gallery-category-where-unique.input';
import { Type } from 'class-transformer';
import { GalleryCategoryCreateWithoutGalleryInput } from './gallery-category-create-without-gallery.input';

@InputType()
export class GalleryCategoryCreateOrConnectWithoutGalleryInput {

    @Field(() => GalleryCategoryWhereUniqueInput, {nullable:false})
    @Type(() => GalleryCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<GalleryCategoryWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => GalleryCategoryCreateWithoutGalleryInput, {nullable:false})
    @Type(() => GalleryCategoryCreateWithoutGalleryInput)
    create!: GalleryCategoryCreateWithoutGalleryInput;
}
