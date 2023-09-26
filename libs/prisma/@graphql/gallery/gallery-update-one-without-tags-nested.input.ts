import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GalleryCreateWithoutTagsInput } from './gallery-create-without-tags.input';
import { Type } from 'class-transformer';
import { GalleryCreateOrConnectWithoutTagsInput } from './gallery-create-or-connect-without-tags.input';
import { GalleryUpsertWithoutTagsInput } from './gallery-upsert-without-tags.input';
import { GalleryWhereInput } from './gallery-where.input';
import { Prisma } from '@prisma/client';
import { GalleryWhereUniqueInput } from './gallery-where-unique.input';
import { GalleryUpdateToOneWithWhereWithoutTagsInput } from './gallery-update-to-one-with-where-without-tags.input';

@InputType()
export class GalleryUpdateOneWithoutTagsNestedInput {

    @Field(() => GalleryCreateWithoutTagsInput, {nullable:true})
    @Type(() => GalleryCreateWithoutTagsInput)
    create?: GalleryCreateWithoutTagsInput;

    @Field(() => GalleryCreateOrConnectWithoutTagsInput, {nullable:true})
    @Type(() => GalleryCreateOrConnectWithoutTagsInput)
    connectOrCreate?: GalleryCreateOrConnectWithoutTagsInput;

    @Field(() => GalleryUpsertWithoutTagsInput, {nullable:true})
    @Type(() => GalleryUpsertWithoutTagsInput)
    upsert?: GalleryUpsertWithoutTagsInput;

    @Field(() => GalleryWhereInput, {nullable:true})
    @Type(() => GalleryWhereInput)
    disconnect?: GalleryWhereInput;

    @Field(() => GalleryWhereInput, {nullable:true})
    @Type(() => GalleryWhereInput)
    delete?: GalleryWhereInput;

    @Field(() => GalleryWhereUniqueInput, {nullable:true})
    @Type(() => GalleryWhereUniqueInput)
    connect?: Prisma.AtLeast<GalleryWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => GalleryUpdateToOneWithWhereWithoutTagsInput, {nullable:true})
    @Type(() => GalleryUpdateToOneWithWhereWithoutTagsInput)
    update?: GalleryUpdateToOneWithWhereWithoutTagsInput;
}
