import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GalleryCategoryWhereUniqueInput } from './gallery-category-where-unique.input';
import { Type } from 'class-transformer';
import { GalleryCategoryUpdateWithoutGalleryInput } from './gallery-category-update-without-gallery.input';

@InputType()
export class GalleryCategoryUpdateWithWhereUniqueWithoutGalleryInput {

    @Field(() => GalleryCategoryWhereUniqueInput, {nullable:false})
    @Type(() => GalleryCategoryWhereUniqueInput)
    where!: GalleryCategoryWhereUniqueInput;

    @Field(() => GalleryCategoryUpdateWithoutGalleryInput, {nullable:false})
    @Type(() => GalleryCategoryUpdateWithoutGalleryInput)
    data!: GalleryCategoryUpdateWithoutGalleryInput;
}
