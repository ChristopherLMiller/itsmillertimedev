import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GalleryWhereUniqueInput } from './gallery-where-unique.input';
import { Type } from 'class-transformer';
import { GalleryUpdateWithoutImagesInput } from './gallery-update-without-images.input';
import { GalleryCreateWithoutImagesInput } from './gallery-create-without-images.input';

@InputType()
export class GalleryUpsertWithWhereUniqueWithoutImagesInput {

    @Field(() => GalleryWhereUniqueInput, {nullable:false})
    @Type(() => GalleryWhereUniqueInput)
    where!: GalleryWhereUniqueInput;

    @Field(() => GalleryUpdateWithoutImagesInput, {nullable:false})
    @Type(() => GalleryUpdateWithoutImagesInput)
    update!: GalleryUpdateWithoutImagesInput;

    @Field(() => GalleryCreateWithoutImagesInput, {nullable:false})
    @Type(() => GalleryCreateWithoutImagesInput)
    create!: GalleryCreateWithoutImagesInput;
}
