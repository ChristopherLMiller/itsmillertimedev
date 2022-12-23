import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GalleryCreateWithoutCategoriesInput } from './gallery-create-without-categories.input';
import { Type } from 'class-transformer';
import { GalleryCreateOrConnectWithoutCategoriesInput } from './gallery-create-or-connect-without-categories.input';
import { GalleryUpsertWithoutCategoriesInput } from './gallery-upsert-without-categories.input';
import { GalleryWhereUniqueInput } from './gallery-where-unique.input';
import { GalleryUpdateWithoutCategoriesInput } from './gallery-update-without-categories.input';

@InputType()
export class GalleryUpdateOneWithoutCategoriesNestedInput {

    @Field(() => GalleryCreateWithoutCategoriesInput, {nullable:true})
    @Type(() => GalleryCreateWithoutCategoriesInput)
    create?: GalleryCreateWithoutCategoriesInput;

    @Field(() => GalleryCreateOrConnectWithoutCategoriesInput, {nullable:true})
    @Type(() => GalleryCreateOrConnectWithoutCategoriesInput)
    connectOrCreate?: GalleryCreateOrConnectWithoutCategoriesInput;

    @Field(() => GalleryUpsertWithoutCategoriesInput, {nullable:true})
    @Type(() => GalleryUpsertWithoutCategoriesInput)
    upsert?: GalleryUpsertWithoutCategoriesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => GalleryWhereUniqueInput, {nullable:true})
    @Type(() => GalleryWhereUniqueInput)
    connect?: GalleryWhereUniqueInput;

    @Field(() => GalleryUpdateWithoutCategoriesInput, {nullable:true})
    @Type(() => GalleryUpdateWithoutCategoriesInput)
    update?: GalleryUpdateWithoutCategoriesInput;
}
