import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GalleryTagCreateWithoutGalleryInput } from './gallery-tag-create-without-gallery.input';
import { Type } from 'class-transformer';
import { GalleryTagCreateOrConnectWithoutGalleryInput } from './gallery-tag-create-or-connect-without-gallery.input';
import { GalleryTagUpsertWithWhereUniqueWithoutGalleryInput } from './gallery-tag-upsert-with-where-unique-without-gallery.input';
import { GalleryTagCreateManyGalleryInputEnvelope } from './gallery-tag-create-many-gallery-input-envelope.input';
import { Prisma } from '@prisma/client';
import { GalleryTagWhereUniqueInput } from './gallery-tag-where-unique.input';
import { GalleryTagUpdateWithWhereUniqueWithoutGalleryInput } from './gallery-tag-update-with-where-unique-without-gallery.input';
import { GalleryTagUpdateManyWithWhereWithoutGalleryInput } from './gallery-tag-update-many-with-where-without-gallery.input';
import { GalleryTagScalarWhereInput } from './gallery-tag-scalar-where.input';

@InputType()
export class GalleryTagUpdateManyWithoutGalleryNestedInput {

    @Field(() => [GalleryTagCreateWithoutGalleryInput], {nullable:true})
    @Type(() => GalleryTagCreateWithoutGalleryInput)
    create?: Array<GalleryTagCreateWithoutGalleryInput>;

    @Field(() => [GalleryTagCreateOrConnectWithoutGalleryInput], {nullable:true})
    @Type(() => GalleryTagCreateOrConnectWithoutGalleryInput)
    connectOrCreate?: Array<GalleryTagCreateOrConnectWithoutGalleryInput>;

    @Field(() => [GalleryTagUpsertWithWhereUniqueWithoutGalleryInput], {nullable:true})
    @Type(() => GalleryTagUpsertWithWhereUniqueWithoutGalleryInput)
    upsert?: Array<GalleryTagUpsertWithWhereUniqueWithoutGalleryInput>;

    @Field(() => GalleryTagCreateManyGalleryInputEnvelope, {nullable:true})
    @Type(() => GalleryTagCreateManyGalleryInputEnvelope)
    createMany?: GalleryTagCreateManyGalleryInputEnvelope;

    @Field(() => [GalleryTagWhereUniqueInput], {nullable:true})
    @Type(() => GalleryTagWhereUniqueInput)
    set?: Array<Prisma.AtLeast<GalleryTagWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [GalleryTagWhereUniqueInput], {nullable:true})
    @Type(() => GalleryTagWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<GalleryTagWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [GalleryTagWhereUniqueInput], {nullable:true})
    @Type(() => GalleryTagWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<GalleryTagWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [GalleryTagWhereUniqueInput], {nullable:true})
    @Type(() => GalleryTagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<GalleryTagWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [GalleryTagUpdateWithWhereUniqueWithoutGalleryInput], {nullable:true})
    @Type(() => GalleryTagUpdateWithWhereUniqueWithoutGalleryInput)
    update?: Array<GalleryTagUpdateWithWhereUniqueWithoutGalleryInput>;

    @Field(() => [GalleryTagUpdateManyWithWhereWithoutGalleryInput], {nullable:true})
    @Type(() => GalleryTagUpdateManyWithWhereWithoutGalleryInput)
    updateMany?: Array<GalleryTagUpdateManyWithWhereWithoutGalleryInput>;

    @Field(() => [GalleryTagScalarWhereInput], {nullable:true})
    @Type(() => GalleryTagScalarWhereInput)
    deleteMany?: Array<GalleryTagScalarWhereInput>;
}
