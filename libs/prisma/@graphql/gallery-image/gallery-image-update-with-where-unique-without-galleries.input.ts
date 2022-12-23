import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GalleryImageWhereUniqueInput } from './gallery-image-where-unique.input';
import { Type } from 'class-transformer';
import { GalleryImageUpdateWithoutGalleriesInput } from './gallery-image-update-without-galleries.input';

@InputType()
export class GalleryImageUpdateWithWhereUniqueWithoutGalleriesInput {

    @Field(() => GalleryImageWhereUniqueInput, {nullable:false})
    @Type(() => GalleryImageWhereUniqueInput)
    where!: GalleryImageWhereUniqueInput;

    @Field(() => GalleryImageUpdateWithoutGalleriesInput, {nullable:false})
    @Type(() => GalleryImageUpdateWithoutGalleriesInput)
    data!: GalleryImageUpdateWithoutGalleriesInput;
}
