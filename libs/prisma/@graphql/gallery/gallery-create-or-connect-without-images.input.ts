import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GalleryWhereUniqueInput } from './gallery-where-unique.input';
import { Type } from 'class-transformer';
import { GalleryCreateWithoutImagesInput } from './gallery-create-without-images.input';

@InputType()
export class GalleryCreateOrConnectWithoutImagesInput {

    @Field(() => GalleryWhereUniqueInput, {nullable:false})
    @Type(() => GalleryWhereUniqueInput)
    where!: GalleryWhereUniqueInput;

    @Field(() => GalleryCreateWithoutImagesInput, {nullable:false})
    @Type(() => GalleryCreateWithoutImagesInput)
    create!: GalleryCreateWithoutImagesInput;
}
