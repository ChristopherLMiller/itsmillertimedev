import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GalleryWhereInput } from './gallery-where.input';
import { Type } from 'class-transformer';
import { GalleryUpdateWithoutCategoriesInput } from './gallery-update-without-categories.input';

@InputType()
export class GalleryUpdateToOneWithWhereWithoutCategoriesInput {

    @Field(() => GalleryWhereInput, {nullable:true})
    @Type(() => GalleryWhereInput)
    where?: GalleryWhereInput;

    @Field(() => GalleryUpdateWithoutCategoriesInput, {nullable:false})
    @Type(() => GalleryUpdateWithoutCategoriesInput)
    data!: GalleryUpdateWithoutCategoriesInput;
}
