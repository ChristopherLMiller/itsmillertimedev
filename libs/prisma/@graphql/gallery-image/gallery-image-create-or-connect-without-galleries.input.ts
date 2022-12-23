import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GalleryImageWhereUniqueInput } from './gallery-image-where-unique.input';
import { Type } from 'class-transformer';
import { GalleryImageCreateWithoutGalleriesInput } from './gallery-image-create-without-galleries.input';

@InputType()
export class GalleryImageCreateOrConnectWithoutGalleriesInput {

    @Field(() => GalleryImageWhereUniqueInput, {nullable:false})
    @Type(() => GalleryImageWhereUniqueInput)
    where!: GalleryImageWhereUniqueInput;

    @Field(() => GalleryImageCreateWithoutGalleriesInput, {nullable:false})
    @Type(() => GalleryImageCreateWithoutGalleriesInput)
    create!: GalleryImageCreateWithoutGalleriesInput;
}
