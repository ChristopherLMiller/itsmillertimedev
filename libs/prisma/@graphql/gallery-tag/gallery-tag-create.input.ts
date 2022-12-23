import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GalleryCreateNestedOneWithoutTagsInput } from '../gallery/gallery-create-nested-one-without-tags.input';

@InputType()
export class GalleryTagCreateInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => GalleryCreateNestedOneWithoutTagsInput, {nullable:true})
    Gallery?: GalleryCreateNestedOneWithoutTagsInput;
}
