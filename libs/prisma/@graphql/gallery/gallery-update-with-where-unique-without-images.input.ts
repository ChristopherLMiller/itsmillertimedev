import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GalleryWhereUniqueInput } from './gallery-where-unique.input';
import { Type } from 'class-transformer';
import { GalleryUpdateWithoutImagesInput } from './gallery-update-without-images.input';

@InputType()
export class GalleryUpdateWithWhereUniqueWithoutImagesInput {

    @Field(() => GalleryWhereUniqueInput, {nullable:false})
    @Type(() => GalleryWhereUniqueInput)
    where!: Prisma.AtLeast<GalleryWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => GalleryUpdateWithoutImagesInput, {nullable:false})
    @Type(() => GalleryUpdateWithoutImagesInput)
    data!: GalleryUpdateWithoutImagesInput;
}
