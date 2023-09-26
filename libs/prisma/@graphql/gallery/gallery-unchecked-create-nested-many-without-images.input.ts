import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GalleryCreateWithoutImagesInput } from './gallery-create-without-images.input';
import { Type } from 'class-transformer';
import { GalleryCreateOrConnectWithoutImagesInput } from './gallery-create-or-connect-without-images.input';
import { Prisma } from '@prisma/client';
import { GalleryWhereUniqueInput } from './gallery-where-unique.input';

@InputType()
export class GalleryUncheckedCreateNestedManyWithoutImagesInput {

    @Field(() => [GalleryCreateWithoutImagesInput], {nullable:true})
    @Type(() => GalleryCreateWithoutImagesInput)
    create?: Array<GalleryCreateWithoutImagesInput>;

    @Field(() => [GalleryCreateOrConnectWithoutImagesInput], {nullable:true})
    @Type(() => GalleryCreateOrConnectWithoutImagesInput)
    connectOrCreate?: Array<GalleryCreateOrConnectWithoutImagesInput>;

    @Field(() => [GalleryWhereUniqueInput], {nullable:true})
    @Type(() => GalleryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<GalleryWhereUniqueInput, 'id' | 'slug'>>;
}
