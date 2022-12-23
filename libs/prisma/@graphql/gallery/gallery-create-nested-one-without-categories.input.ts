import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GalleryCreateWithoutCategoriesInput } from './gallery-create-without-categories.input';
import { Type } from 'class-transformer';
import { GalleryCreateOrConnectWithoutCategoriesInput } from './gallery-create-or-connect-without-categories.input';
import { GalleryWhereUniqueInput } from './gallery-where-unique.input';

@InputType()
export class GalleryCreateNestedOneWithoutCategoriesInput {

    @Field(() => GalleryCreateWithoutCategoriesInput, {nullable:true})
    @Type(() => GalleryCreateWithoutCategoriesInput)
    create?: GalleryCreateWithoutCategoriesInput;

    @Field(() => GalleryCreateOrConnectWithoutCategoriesInput, {nullable:true})
    @Type(() => GalleryCreateOrConnectWithoutCategoriesInput)
    connectOrCreate?: GalleryCreateOrConnectWithoutCategoriesInput;

    @Field(() => GalleryWhereUniqueInput, {nullable:true})
    @Type(() => GalleryWhereUniqueInput)
    connect?: GalleryWhereUniqueInput;
}
