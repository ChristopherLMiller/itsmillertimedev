import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GalleryCreateNestedOneWithoutCategoriesInput } from '../gallery/gallery-create-nested-one-without-categories.input';

@InputType()
export class GalleryCategoryCreateInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => GalleryCreateNestedOneWithoutCategoriesInput, {nullable:true})
    Gallery?: GalleryCreateNestedOneWithoutCategoriesInput;
}
