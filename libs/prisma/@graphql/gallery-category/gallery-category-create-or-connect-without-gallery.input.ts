import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GalleryCategoryWhereUniqueInput } from './gallery-category-where-unique.input';
import { Type } from 'class-transformer';
import { GalleryCategoryCreateWithoutGalleryInput } from './gallery-category-create-without-gallery.input';

@InputType()
export class GalleryCategoryCreateOrConnectWithoutGalleryInput {

    @Field(() => GalleryCategoryWhereUniqueInput, {nullable:false})
    @Type(() => GalleryCategoryWhereUniqueInput)
    where!: GalleryCategoryWhereUniqueInput;

    @Field(() => GalleryCategoryCreateWithoutGalleryInput, {nullable:false})
    @Type(() => GalleryCategoryCreateWithoutGalleryInput)
    create!: GalleryCategoryCreateWithoutGalleryInput;
}
