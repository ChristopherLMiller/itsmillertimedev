import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GalleryImageWhereUniqueInput } from './gallery-image-where-unique.input';
import { Type } from 'class-transformer';
import { GalleryImageCreateWithoutGalleriesInput } from './gallery-image-create-without-galleries.input';

@InputType()
export class GalleryImageCreateOrConnectWithoutGalleriesInput {

    @Field(() => GalleryImageWhereUniqueInput, {nullable:false})
    @Type(() => GalleryImageWhereUniqueInput)
    where!: Prisma.AtLeast<GalleryImageWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => GalleryImageCreateWithoutGalleriesInput, {nullable:false})
    @Type(() => GalleryImageCreateWithoutGalleriesInput)
    create!: GalleryImageCreateWithoutGalleriesInput;
}
