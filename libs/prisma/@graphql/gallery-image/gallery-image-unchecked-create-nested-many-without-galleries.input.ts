import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GalleryImageCreateWithoutGalleriesInput } from './gallery-image-create-without-galleries.input';
import { Type } from 'class-transformer';
import { GalleryImageCreateOrConnectWithoutGalleriesInput } from './gallery-image-create-or-connect-without-galleries.input';
import { Prisma } from '@prisma/client';
import { GalleryImageWhereUniqueInput } from './gallery-image-where-unique.input';

@InputType()
export class GalleryImageUncheckedCreateNestedManyWithoutGalleriesInput {

    @Field(() => [GalleryImageCreateWithoutGalleriesInput], {nullable:true})
    @Type(() => GalleryImageCreateWithoutGalleriesInput)
    create?: Array<GalleryImageCreateWithoutGalleriesInput>;

    @Field(() => [GalleryImageCreateOrConnectWithoutGalleriesInput], {nullable:true})
    @Type(() => GalleryImageCreateOrConnectWithoutGalleriesInput)
    connectOrCreate?: Array<GalleryImageCreateOrConnectWithoutGalleriesInput>;

    @Field(() => [GalleryImageWhereUniqueInput], {nullable:true})
    @Type(() => GalleryImageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<GalleryImageWhereUniqueInput, 'id' | 'slug'>>;
}
