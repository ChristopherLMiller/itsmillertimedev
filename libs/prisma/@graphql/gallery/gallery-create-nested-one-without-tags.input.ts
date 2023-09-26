import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GalleryCreateWithoutTagsInput } from './gallery-create-without-tags.input';
import { Type } from 'class-transformer';
import { GalleryCreateOrConnectWithoutTagsInput } from './gallery-create-or-connect-without-tags.input';
import { Prisma } from '@prisma/client';
import { GalleryWhereUniqueInput } from './gallery-where-unique.input';

@InputType()
export class GalleryCreateNestedOneWithoutTagsInput {

    @Field(() => GalleryCreateWithoutTagsInput, {nullable:true})
    @Type(() => GalleryCreateWithoutTagsInput)
    create?: GalleryCreateWithoutTagsInput;

    @Field(() => GalleryCreateOrConnectWithoutTagsInput, {nullable:true})
    @Type(() => GalleryCreateOrConnectWithoutTagsInput)
    connectOrCreate?: GalleryCreateOrConnectWithoutTagsInput;

    @Field(() => GalleryWhereUniqueInput, {nullable:true})
    @Type(() => GalleryWhereUniqueInput)
    connect?: Prisma.AtLeast<GalleryWhereUniqueInput, 'id' | 'slug'>;
}
