import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GalleryTagWhereInput } from './gallery-tag-where.input';
import { Type } from 'class-transformer';
import { GalleryTagOrderByWithRelationInput } from './gallery-tag-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { GalleryTagWhereUniqueInput } from './gallery-tag-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GalleryTagScalarFieldEnum } from './gallery-tag-scalar-field.enum';

@ArgsType()
export class FindFirstGalleryTagArgs {

    @Field(() => GalleryTagWhereInput, {nullable:true})
    @Type(() => GalleryTagWhereInput)
    where?: GalleryTagWhereInput;

    @Field(() => [GalleryTagOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GalleryTagOrderByWithRelationInput>;

    @Field(() => GalleryTagWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<GalleryTagWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [GalleryTagScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof GalleryTagScalarFieldEnum>;
}
