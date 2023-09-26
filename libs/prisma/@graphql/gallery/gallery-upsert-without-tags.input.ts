import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GalleryUpdateWithoutTagsInput } from './gallery-update-without-tags.input';
import { Type } from 'class-transformer';
import { GalleryCreateWithoutTagsInput } from './gallery-create-without-tags.input';
import { GalleryWhereInput } from './gallery-where.input';

@InputType()
export class GalleryUpsertWithoutTagsInput {

    @Field(() => GalleryUpdateWithoutTagsInput, {nullable:false})
    @Type(() => GalleryUpdateWithoutTagsInput)
    update!: GalleryUpdateWithoutTagsInput;

    @Field(() => GalleryCreateWithoutTagsInput, {nullable:false})
    @Type(() => GalleryCreateWithoutTagsInput)
    create!: GalleryCreateWithoutTagsInput;

    @Field(() => GalleryWhereInput, {nullable:true})
    @Type(() => GalleryWhereInput)
    where?: GalleryWhereInput;
}
