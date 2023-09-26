import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GalleryImageUpdateInput } from './gallery-image-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { GalleryImageWhereUniqueInput } from './gallery-image-where-unique.input';

@ArgsType()
export class UpdateOneGalleryImageArgs {

    @Field(() => GalleryImageUpdateInput, {nullable:false})
    @Type(() => GalleryImageUpdateInput)
    data!: GalleryImageUpdateInput;

    @Field(() => GalleryImageWhereUniqueInput, {nullable:false})
    @Type(() => GalleryImageWhereUniqueInput)
    where!: Prisma.AtLeast<GalleryImageWhereUniqueInput, 'id' | 'slug'>;
}
