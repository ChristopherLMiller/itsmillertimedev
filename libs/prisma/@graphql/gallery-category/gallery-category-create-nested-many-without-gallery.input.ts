import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GalleryCategoryCreateWithoutGalleryInput } from './gallery-category-create-without-gallery.input';
import { Type } from 'class-transformer';
import { GalleryCategoryCreateOrConnectWithoutGalleryInput } from './gallery-category-create-or-connect-without-gallery.input';
import { GalleryCategoryCreateManyGalleryInputEnvelope } from './gallery-category-create-many-gallery-input-envelope.input';
import { Prisma } from '@prisma/client';
import { GalleryCategoryWhereUniqueInput } from './gallery-category-where-unique.input';

@InputType()
export class GalleryCategoryCreateNestedManyWithoutGalleryInput {

    @Field(() => [GalleryCategoryCreateWithoutGalleryInput], {nullable:true})
    @Type(() => GalleryCategoryCreateWithoutGalleryInput)
    create?: Array<GalleryCategoryCreateWithoutGalleryInput>;

    @Field(() => [GalleryCategoryCreateOrConnectWithoutGalleryInput], {nullable:true})
    @Type(() => GalleryCategoryCreateOrConnectWithoutGalleryInput)
    connectOrCreate?: Array<GalleryCategoryCreateOrConnectWithoutGalleryInput>;

    @Field(() => GalleryCategoryCreateManyGalleryInputEnvelope, {nullable:true})
    @Type(() => GalleryCategoryCreateManyGalleryInputEnvelope)
    createMany?: GalleryCategoryCreateManyGalleryInputEnvelope;

    @Field(() => [GalleryCategoryWhereUniqueInput], {nullable:true})
    @Type(() => GalleryCategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<GalleryCategoryWhereUniqueInput, 'id' | 'slug'>>;
}
