import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GalleryImageWhereUniqueInput } from './gallery-image-where-unique.input';
import { Type } from 'class-transformer';
import { GalleryImageUpdateWithoutGalleriesInput } from './gallery-image-update-without-galleries.input';
import { GalleryImageCreateWithoutGalleriesInput } from './gallery-image-create-without-galleries.input';

@InputType()
export class GalleryImageUpsertWithWhereUniqueWithoutGalleriesInput {

    @Field(() => GalleryImageWhereUniqueInput, {nullable:false})
    @Type(() => GalleryImageWhereUniqueInput)
    where!: GalleryImageWhereUniqueInput;

    @Field(() => GalleryImageUpdateWithoutGalleriesInput, {nullable:false})
    @Type(() => GalleryImageUpdateWithoutGalleriesInput)
    update!: GalleryImageUpdateWithoutGalleriesInput;

    @Field(() => GalleryImageCreateWithoutGalleriesInput, {nullable:false})
    @Type(() => GalleryImageCreateWithoutGalleriesInput)
    create!: GalleryImageCreateWithoutGalleriesInput;
}
