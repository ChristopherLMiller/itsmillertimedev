import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GalleryWhereUniqueInput } from './gallery-where-unique.input';
import { Type } from 'class-transformer';
import { GalleryCreateWithoutTagsInput } from './gallery-create-without-tags.input';

@InputType()
export class GalleryCreateOrConnectWithoutTagsInput {

    @Field(() => GalleryWhereUniqueInput, {nullable:false})
    @Type(() => GalleryWhereUniqueInput)
    where!: Prisma.AtLeast<GalleryWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => GalleryCreateWithoutTagsInput, {nullable:false})
    @Type(() => GalleryCreateWithoutTagsInput)
    create!: GalleryCreateWithoutTagsInput;
}
