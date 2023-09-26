import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GalleryWhereUniqueInput } from './gallery-where-unique.input';
import { Type } from 'class-transformer';
import { GalleryCreateInput } from './gallery-create.input';
import { GalleryUpdateInput } from './gallery-update.input';

@ArgsType()
export class UpsertOneGalleryArgs {

    @Field(() => GalleryWhereUniqueInput, {nullable:false})
    @Type(() => GalleryWhereUniqueInput)
    where!: Prisma.AtLeast<GalleryWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => GalleryCreateInput, {nullable:false})
    @Type(() => GalleryCreateInput)
    create!: GalleryCreateInput;

    @Field(() => GalleryUpdateInput, {nullable:false})
    @Type(() => GalleryUpdateInput)
    update!: GalleryUpdateInput;
}
