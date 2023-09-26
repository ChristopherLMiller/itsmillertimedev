import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GalleryTagWhereUniqueInput } from './gallery-tag-where-unique.input';
import { Type } from 'class-transformer';
import { GalleryTagCreateInput } from './gallery-tag-create.input';
import { GalleryTagUpdateInput } from './gallery-tag-update.input';

@ArgsType()
export class UpsertOneGalleryTagArgs {

    @Field(() => GalleryTagWhereUniqueInput, {nullable:false})
    @Type(() => GalleryTagWhereUniqueInput)
    where!: Prisma.AtLeast<GalleryTagWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => GalleryTagCreateInput, {nullable:false})
    @Type(() => GalleryTagCreateInput)
    create!: GalleryTagCreateInput;

    @Field(() => GalleryTagUpdateInput, {nullable:false})
    @Type(() => GalleryTagUpdateInput)
    update!: GalleryTagUpdateInput;
}
