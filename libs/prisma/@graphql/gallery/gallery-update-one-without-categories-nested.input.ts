import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GalleryCreateWithoutCategoriesInput } from './gallery-create-without-categories.input';
import { Type } from 'class-transformer';
import { GalleryCreateOrConnectWithoutCategoriesInput } from './gallery-create-or-connect-without-categories.input';
import { GalleryUpsertWithoutCategoriesInput } from './gallery-upsert-without-categories.input';
import { GalleryWhereInput } from './gallery-where.input';
import { Prisma } from '@prisma/client';
import { GalleryWhereUniqueInput } from './gallery-where-unique.input';
import { GalleryUpdateToOneWithWhereWithoutCategoriesInput } from './gallery-update-to-one-with-where-without-categories.input';

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

    @Field(() => GalleryWhereInput, {nullable:true})
    @Type(() => GalleryWhereInput)
    disconnect?: GalleryWhereInput;

    @Field(() => GalleryWhereInput, {nullable:true})
    @Type(() => GalleryWhereInput)
    delete?: GalleryWhereInput;

    @Field(() => GalleryWhereUniqueInput, {nullable:true})
    @Type(() => GalleryWhereUniqueInput)
    connect?: Prisma.AtLeast<GalleryWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => GalleryUpdateToOneWithWhereWithoutCategoriesInput, {nullable:true})
    @Type(() => GalleryUpdateToOneWithWhereWithoutCategoriesInput)
    update?: GalleryUpdateToOneWithWhereWithoutCategoriesInput;
}
