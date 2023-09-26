import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GalleryCategoryCreateWithoutGalleryInput } from './gallery-category-create-without-gallery.input';
import { Type } from 'class-transformer';
import { GalleryCategoryCreateOrConnectWithoutGalleryInput } from './gallery-category-create-or-connect-without-gallery.input';
import { GalleryCategoryUpsertWithWhereUniqueWithoutGalleryInput } from './gallery-category-upsert-with-where-unique-without-gallery.input';
import { GalleryCategoryCreateManyGalleryInputEnvelope } from './gallery-category-create-many-gallery-input-envelope.input';
import { Prisma } from '@prisma/client';
import { GalleryCategoryWhereUniqueInput } from './gallery-category-where-unique.input';
import { GalleryCategoryUpdateWithWhereUniqueWithoutGalleryInput } from './gallery-category-update-with-where-unique-without-gallery.input';
import { GalleryCategoryUpdateManyWithWhereWithoutGalleryInput } from './gallery-category-update-many-with-where-without-gallery.input';
import { GalleryCategoryScalarWhereInput } from './gallery-category-scalar-where.input';

@InputType()
export class GalleryCategoryUncheckedUpdateManyWithoutGalleryNestedInput {

    @Field(() => [GalleryCategoryCreateWithoutGalleryInput], {nullable:true})
    @Type(() => GalleryCategoryCreateWithoutGalleryInput)
    create?: Array<GalleryCategoryCreateWithoutGalleryInput>;

    @Field(() => [GalleryCategoryCreateOrConnectWithoutGalleryInput], {nullable:true})
    @Type(() => GalleryCategoryCreateOrConnectWithoutGalleryInput)
    connectOrCreate?: Array<GalleryCategoryCreateOrConnectWithoutGalleryInput>;

    @Field(() => [GalleryCategoryUpsertWithWhereUniqueWithoutGalleryInput], {nullable:true})
    @Type(() => GalleryCategoryUpsertWithWhereUniqueWithoutGalleryInput)
    upsert?: Array<GalleryCategoryUpsertWithWhereUniqueWithoutGalleryInput>;

    @Field(() => GalleryCategoryCreateManyGalleryInputEnvelope, {nullable:true})
    @Type(() => GalleryCategoryCreateManyGalleryInputEnvelope)
    createMany?: GalleryCategoryCreateManyGalleryInputEnvelope;

    @Field(() => [GalleryCategoryWhereUniqueInput], {nullable:true})
    @Type(() => GalleryCategoryWhereUniqueInput)
    set?: Array<Prisma.AtLeast<GalleryCategoryWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [GalleryCategoryWhereUniqueInput], {nullable:true})
    @Type(() => GalleryCategoryWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<GalleryCategoryWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [GalleryCategoryWhereUniqueInput], {nullable:true})
    @Type(() => GalleryCategoryWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<GalleryCategoryWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [GalleryCategoryWhereUniqueInput], {nullable:true})
    @Type(() => GalleryCategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<GalleryCategoryWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [GalleryCategoryUpdateWithWhereUniqueWithoutGalleryInput], {nullable:true})
    @Type(() => GalleryCategoryUpdateWithWhereUniqueWithoutGalleryInput)
    update?: Array<GalleryCategoryUpdateWithWhereUniqueWithoutGalleryInput>;

    @Field(() => [GalleryCategoryUpdateManyWithWhereWithoutGalleryInput], {nullable:true})
    @Type(() => GalleryCategoryUpdateManyWithWhereWithoutGalleryInput)
    updateMany?: Array<GalleryCategoryUpdateManyWithWhereWithoutGalleryInput>;

    @Field(() => [GalleryCategoryScalarWhereInput], {nullable:true})
    @Type(() => GalleryCategoryScalarWhereInput)
    deleteMany?: Array<GalleryCategoryScalarWhereInput>;
}
