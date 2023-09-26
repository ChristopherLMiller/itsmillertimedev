import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GalleryImageCreateWithoutGalleriesInput } from './gallery-image-create-without-galleries.input';
import { Type } from 'class-transformer';
import { GalleryImageCreateOrConnectWithoutGalleriesInput } from './gallery-image-create-or-connect-without-galleries.input';
import { GalleryImageUpsertWithWhereUniqueWithoutGalleriesInput } from './gallery-image-upsert-with-where-unique-without-galleries.input';
import { Prisma } from '@prisma/client';
import { GalleryImageWhereUniqueInput } from './gallery-image-where-unique.input';
import { GalleryImageUpdateWithWhereUniqueWithoutGalleriesInput } from './gallery-image-update-with-where-unique-without-galleries.input';
import { GalleryImageUpdateManyWithWhereWithoutGalleriesInput } from './gallery-image-update-many-with-where-without-galleries.input';
import { GalleryImageScalarWhereInput } from './gallery-image-scalar-where.input';

@InputType()
export class GalleryImageUncheckedUpdateManyWithoutGalleriesNestedInput {

    @Field(() => [GalleryImageCreateWithoutGalleriesInput], {nullable:true})
    @Type(() => GalleryImageCreateWithoutGalleriesInput)
    create?: Array<GalleryImageCreateWithoutGalleriesInput>;

    @Field(() => [GalleryImageCreateOrConnectWithoutGalleriesInput], {nullable:true})
    @Type(() => GalleryImageCreateOrConnectWithoutGalleriesInput)
    connectOrCreate?: Array<GalleryImageCreateOrConnectWithoutGalleriesInput>;

    @Field(() => [GalleryImageUpsertWithWhereUniqueWithoutGalleriesInput], {nullable:true})
    @Type(() => GalleryImageUpsertWithWhereUniqueWithoutGalleriesInput)
    upsert?: Array<GalleryImageUpsertWithWhereUniqueWithoutGalleriesInput>;

    @Field(() => [GalleryImageWhereUniqueInput], {nullable:true})
    @Type(() => GalleryImageWhereUniqueInput)
    set?: Array<Prisma.AtLeast<GalleryImageWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [GalleryImageWhereUniqueInput], {nullable:true})
    @Type(() => GalleryImageWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<GalleryImageWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [GalleryImageWhereUniqueInput], {nullable:true})
    @Type(() => GalleryImageWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<GalleryImageWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [GalleryImageWhereUniqueInput], {nullable:true})
    @Type(() => GalleryImageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<GalleryImageWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [GalleryImageUpdateWithWhereUniqueWithoutGalleriesInput], {nullable:true})
    @Type(() => GalleryImageUpdateWithWhereUniqueWithoutGalleriesInput)
    update?: Array<GalleryImageUpdateWithWhereUniqueWithoutGalleriesInput>;

    @Field(() => [GalleryImageUpdateManyWithWhereWithoutGalleriesInput], {nullable:true})
    @Type(() => GalleryImageUpdateManyWithWhereWithoutGalleriesInput)
    updateMany?: Array<GalleryImageUpdateManyWithWhereWithoutGalleriesInput>;

    @Field(() => [GalleryImageScalarWhereInput], {nullable:true})
    @Type(() => GalleryImageScalarWhereInput)
    deleteMany?: Array<GalleryImageScalarWhereInput>;
}
