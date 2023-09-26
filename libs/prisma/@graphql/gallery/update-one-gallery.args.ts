import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GalleryUpdateInput } from './gallery-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { GalleryWhereUniqueInput } from './gallery-where-unique.input';

@ArgsType()
export class UpdateOneGalleryArgs {

    @Field(() => GalleryUpdateInput, {nullable:false})
    @Type(() => GalleryUpdateInput)
    data!: GalleryUpdateInput;

    @Field(() => GalleryWhereUniqueInput, {nullable:false})
    @Type(() => GalleryWhereUniqueInput)
    where!: Prisma.AtLeast<GalleryWhereUniqueInput, 'id' | 'slug'>;
}
