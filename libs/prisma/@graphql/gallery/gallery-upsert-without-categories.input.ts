import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GalleryUpdateWithoutCategoriesInput } from './gallery-update-without-categories.input';
import { Type } from 'class-transformer';
import { GalleryCreateWithoutCategoriesInput } from './gallery-create-without-categories.input';
import { GalleryWhereInput } from './gallery-where.input';

@InputType()
export class GalleryUpsertWithoutCategoriesInput {

    @Field(() => GalleryUpdateWithoutCategoriesInput, {nullable:false})
    @Type(() => GalleryUpdateWithoutCategoriesInput)
    update!: GalleryUpdateWithoutCategoriesInput;

    @Field(() => GalleryCreateWithoutCategoriesInput, {nullable:false})
    @Type(() => GalleryCreateWithoutCategoriesInput)
    create!: GalleryCreateWithoutCategoriesInput;

    @Field(() => GalleryWhereInput, {nullable:true})
    @Type(() => GalleryWhereInput)
    where?: GalleryWhereInput;
}
