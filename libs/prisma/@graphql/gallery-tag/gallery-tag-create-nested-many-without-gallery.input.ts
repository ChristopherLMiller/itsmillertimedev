import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GalleryTagCreateWithoutGalleryInput } from './gallery-tag-create-without-gallery.input';
import { Type } from 'class-transformer';
import { GalleryTagCreateOrConnectWithoutGalleryInput } from './gallery-tag-create-or-connect-without-gallery.input';
import { GalleryTagCreateManyGalleryInputEnvelope } from './gallery-tag-create-many-gallery-input-envelope.input';
import { Prisma } from '@prisma/client';
import { GalleryTagWhereUniqueInput } from './gallery-tag-where-unique.input';

@InputType()
export class GalleryTagCreateNestedManyWithoutGalleryInput {

    @Field(() => [GalleryTagCreateWithoutGalleryInput], {nullable:true})
    @Type(() => GalleryTagCreateWithoutGalleryInput)
    create?: Array<GalleryTagCreateWithoutGalleryInput>;

    @Field(() => [GalleryTagCreateOrConnectWithoutGalleryInput], {nullable:true})
    @Type(() => GalleryTagCreateOrConnectWithoutGalleryInput)
    connectOrCreate?: Array<GalleryTagCreateOrConnectWithoutGalleryInput>;

    @Field(() => GalleryTagCreateManyGalleryInputEnvelope, {nullable:true})
    @Type(() => GalleryTagCreateManyGalleryInputEnvelope)
    createMany?: GalleryTagCreateManyGalleryInputEnvelope;

    @Field(() => [GalleryTagWhereUniqueInput], {nullable:true})
    @Type(() => GalleryTagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<GalleryTagWhereUniqueInput, 'id' | 'slug'>>;
}
