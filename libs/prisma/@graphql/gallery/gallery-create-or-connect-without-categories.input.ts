import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GalleryWhereUniqueInput } from './gallery-where-unique.input';
import { Type } from 'class-transformer';
import { GalleryCreateWithoutCategoriesInput } from './gallery-create-without-categories.input';

@InputType()
export class GalleryCreateOrConnectWithoutCategoriesInput {

    @Field(() => GalleryWhereUniqueInput, {nullable:false})
    @Type(() => GalleryWhereUniqueInput)
    where!: GalleryWhereUniqueInput;

    @Field(() => GalleryCreateWithoutCategoriesInput, {nullable:false})
    @Type(() => GalleryCreateWithoutCategoriesInput)
    create!: GalleryCreateWithoutCategoriesInput;
}
